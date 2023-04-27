import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <div className='fixed'>
        <Link to="">
          <h1>AppName</h1>
        </Link>
        <Link to="/albums">
          <h2>Albums</h2>
        </Link>
      </div>
    </>
  )
}
