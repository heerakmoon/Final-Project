import './NewAlbum.css';
import ButtonWText from './ButtonWText';
// import { useState } from 'react';

export default function NewAlbum() {
  // const [albumName, setAlbumName] = useState(false);

  return (
    <>
      <form>
        <label>
          Name
          <input type="text" name="name" value="" onChange="" placeholder="Album name" />
        </label>
        <label>
          Description
          <textarea name="description" value="" placeholder="Description...(optional)" />
        </label>
        <ButtonWText textColor='white' bgColor='rgb(134,175,237)' text='Create Album' />
      </form>
    </>
  )
}
