import './NewAlbum.css';
import Button from './Button';
import { useState } from 'react';

export default function NewAlbum() {
  const [albumName, setAlbumName] = useState('');
  const [description, setDescription] = useState('');

  function handleAlbumName(event) {
    setAlbumName(event.target.value);
  }

  function handleDescription(event) {
    setDescription(event.target.value);
  }

  return (
    <>
      <h1>New Album</h1>
      <form onSubmit=''>
        <label>
          Name
          <input type='text' name='name' value={albumName} onChange={handleAlbumName} placeholder="Album name" />
        </label>
        <label>
          Description
          <textarea name='description' value={description} onChange={handleDescription} placeholder="Description...(optional)" />
        </label>
        <Button textColor='white' bgColor='rgb(134,175,237)' text='Create Album' url='/api/albums' />
      </form>
    </>
  )
}
