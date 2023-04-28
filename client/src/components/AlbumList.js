import './AlbumList.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const [albumId, setAlbumId] = useState();
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
    if (event.target.tagName === 'LI') {
      setAlbumId(event.target.id);
      navigate(`/albums/${event.target.id}/photos`);
    }
  }

  if (albums.length === 0) {
    return (
      <>
        <h4>No Albums</h4>
        <h4>Create a new album</h4>
      </>
    )
  }

  return (
    <>
      <ul style={{ listStyleType: 'none' }}>
        {albums.map((album) => {
          return (
            <div onClick={handleClick}>
              <li key={albumId} id={album.albumId} className='photoAlbum'>
                <div className='whiteSquare'></div>
              </li>
              <p>{album.name}</p>
            </div>
          )
        })}
      </ul>
    </>
  );
}
