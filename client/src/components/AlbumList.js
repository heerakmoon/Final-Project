import './AlbumList.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate()

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

  function handleClick(event) {
    if (event.target) {
      navigate(`/albums/${event.target.id}/photos`);
    }
  }

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
            <div onClick={handleClick}>
              <li key={album.albumId} id={album.albumId}></li>
              <p>{album.name}</p>
            </div>
          )
        })}
      </ul>
    </>
  );
}
