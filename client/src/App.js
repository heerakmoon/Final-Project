import './App.css';
import NewAlbum from './components/NewAlbum';
import AddButton from './components/AddButton';
import Navbar from './components/NavBar';
import AlbumList from './components/AlbumList';
// import { useEffect, useState } from 'react';
// import { Route, Routes } from 'react-router-dom';

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
        <AddButton buttonName='New Album' />
        <AlbumList />
        <NewAlbum />
      </div>
    </div>
  );
}

export default App;
