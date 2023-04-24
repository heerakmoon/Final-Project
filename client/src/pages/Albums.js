import AddButton from "../components/AddButton";
import AlbumList from "../components/AlbumList";

export default function Albums() {
  return (
    <>
      <AddButton buttonName='New Album' url='/api/albums/new' />
      <AlbumList />
    </>
  )
}
