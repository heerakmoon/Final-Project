import AddButton from "../components/AddButton";
import { useState, useEffect } from 'react';

export default function ViewAlbum() {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    async function getPhotos() {
      try {
        const res = await fetch('/api/albums/:albumId/photos');
        if (!res.ok) {
          throw new Error('Failed to find photos');
        }
        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        console.error(err);
      }
    }
    getPhotos();
  }, [])

  const emptyAlbumMsg = 'This album is empty :(';

  if (photos.length === 0) {
    return (
      <>
        <AddButton buttonName='Add Photos' />
        <h4>{emptyAlbumMsg}</h4>
      </>
    )
  }

  return (
    <>
      <AddButton buttonName='Add Photos' />
      {photos.map((photo) => {
        return (
          <div>
            <img src={photo.image} alt=''></img>
          </div>
        )
      })}
    </>
  )
}
