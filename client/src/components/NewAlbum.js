import './NewAlbum.css';
import Button from './Button';
// import { useState } from 'react';

export default function NewAlbum() {
  // const [albumName, setAlbumName] = useState(false);

  return (
    <>
      <h1>New Album</h1>
      <form>
        <label>
          Name
          <input type="text" name="name" value="" onChange="" placeholder="Album name" />
        </label>
        <label>
          Description
          <textarea name="description" value="" placeholder="Description...(optional)" />
        </label>
        <Button textColor='white' bgColor='rgb(134,175,237)' text='Create Album' url='/api/albums' />
      </form>
    </>
  )
}
