import './App.css';
import NewAlbum from './components/NewAlbum';
import Navbar from './components/NavBar';
import Albums from './pages/Albums';
// import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="width-without-nav">
        <Routes>
          <Route path='/albums' element={<Albums />} />
          <Route path='/albums/new' element={<NewAlbum />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
