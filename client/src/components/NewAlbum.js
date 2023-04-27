import './NewAlbum.css';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewAlbum() {
  const [albumName, setAlbumName] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  function handleAlbumName(event) {
    setAlbumName(event.target.value);
  }

  function handleDescription(event) {
    setDescription(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await fetch('/api/albums/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: albumName, description })
      });
      if (!res.ok) {
        throw new Error('Failed to create new album');
      }
      const data = await res.json();
      console.log('Album created:', data);
      navigate('/albums')
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h1>New Album</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text' name='name' value={albumName} onChange={handleAlbumName} placeholder="Album name" required />
        </label>
        <label>
          Description
          <textarea name='description' value={description} onChange={handleDescription} placeholder="Description...(optional)" />
        </label>
        <Button textColor='white' bgColor='rgb(134,175,237)' text='Create Album' />
      </form>
    </>
  )
}
