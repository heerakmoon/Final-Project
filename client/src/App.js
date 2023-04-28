import './App.css';
import NewAlbum from './components/NewAlbum';
import Navbar from './components/NavBar';
import Albums from './pages/Albums';
import { Route, Routes } from 'react-router-dom';
import ViewAlbum from './pages/ViewAlbum';
import PhotosForm from './components/PhotosForm';


function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="width-without-nav">
        {/* <ViewAlbum /> */}
        <PhotosForm />
        <Routes>
          <Route path='/albums' element={<Albums />} />
          <Route path='/albums/new' element={<NewAlbum />} />
          <Route path='/albums/:albumId/photos' element={<ViewAlbum />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
