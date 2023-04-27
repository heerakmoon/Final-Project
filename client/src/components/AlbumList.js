import { useState, useEffect } from 'react';
import './AlbumList.css';

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(()=> {
    async function getAlbums() {
      try {
        const res = await fetch('/api/albums');
        if (!res.ok) {
          throw new Error('Failed to find albums');
        }
        const data = await res.json();
        setAlbums(data);
      } catch (err) {
        console.error(err);
      }
    }
    getAlbums();
  }, []);

  if (albums.length === 0) {
    return (
      <>
        <h4>No Albums</h4>
        <p>Create a new album</p>
      </>
    )
  }

  return (
    <>
      <ul style={{ listStyleType: 'none' }}>
        {albums.map((album) => {
          return (
            <div>
              <li key={album.albumId}></li>
              <p>{album.name}</p>
            </div>
          )
        })}
      </ul>
    </>
  );
}
