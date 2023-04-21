// import { useEffect, useState } from 'react';
import './App.css';
import NewAlbum from './NewAlbum';

function App() {
  // const [serverData, setServerData] = useState("");
  // const [albumData, setAlbumData] = useState({ name: '', description: ''});

  // async function createAlbum() {
  //   try{
  //     const res = await fetch('/api/album', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(albumData)
  //     });
  //     if (!res.ok) {
  //       throw new Error('Failed to create new album');
  //     }

  //     const data = await res.json();
  //     console.log('Album created:', data);
  //     setAlbumData({ name: '', description:''});
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  return (
    <div className="App">
      <NewAlbum />
    </div>
  );
}

export default App;
