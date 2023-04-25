import AddButton from "../components/AddButton";
import AlbumList from "../components/AlbumList";
import { Link } from 'react-router-dom';

export default function Albums() {

  return (
    <>
      <Link to="/albums/new">
        <AddButton buttonName='New Album' url='/albums' />
      </Link>
      <AlbumList />
    </>
  )
}
