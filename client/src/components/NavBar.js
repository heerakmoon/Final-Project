import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <div className='fixed'>
        <Link to="">
          <h2>AppName</h2>
        </Link>
        <Link to="/albums">
          <h3>Albums</h3>
        </Link>
      </div>
    </>
  )
}
