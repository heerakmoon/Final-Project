import 'dotenv/config';
import express from 'express';
import errorMiddleware from './lib/error-middleware.js';
import pg from 'pg';
// import multer from 'multer';
// import path from 'path';

// eslint-disable-next-line no-unused-vars -- Remove when used
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/build', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ storage });

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/api/albums', async (req, res, next) => {
  try {
    const sql = `
      select *
      from albums
    `;
    const { rows } = await db.query(sql);
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/albums/:albumId/photos', async (req, res, next) => {
  try {
    const sql = `
    select *
    from photos
    where albumId = $1
    `;
    const { albumId } = req.params;
    const { rows } = await db.query(sql, [albumId]);
    if (rows.length > 0) {
      res.json(rows);
    } else {
      res.status(404).json({ message: 'No photos found for this album' });
    }
  } catch (err) {
    next(err);
  }
});

app.post('/api/albums/new', async (req, res, next) => {
  try {
    const { name, description } = req.body;
    const sql = `
      insert into albums ("name", "description")
      values ($1, $2)
      returning *
      `;
    const params = [name, description];
    const result = await db.query(sql, params);
    const [newAlbum] = result.rows;
    res.status(201).json(newAlbum);
  } catch (err) {
    next(err);
  }
});

// app.post('/api/albums/:albumId/photos/add', upload.array('photos', 10), async (req, res, next) => {
//   try {
//     const { albumId } = req.body;
//     const sql = `
//     insert into photos (albumId, images)
//     values($1, $2)
//     returning *
//     `
//     const params = [albumId];
//     const result = await db.query(sql, params);
//   } catch(err) {
//     next(err);
//   }
// });

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
