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
      </form>
    </>
  )
}
