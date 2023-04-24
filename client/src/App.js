// import { useEffect, useState } from 'react';
import './App.css';
import NewAlbum from './components/NewAlbum';
import AddButton from './components/AddButton';
import Navbar from './components/NavBar';

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
      <Navbar />
      <div className="width-without-nav">
        <NewAlbum />
        <AddButton buttonName='New Album' />
      </div>
    </div>
  );
}

export default App;
