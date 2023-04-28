import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PhotosForm() {
  const navigate = useNavigate();
  const { albumId } = useParams();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const res = await fetch(`/api/albums/${albumId}/photos/add`, {
        method: 'POST',
        body: formData
      });
      if (!res.ok) {
        throw new Error('Failed to upload photos')
      }
      const data = await res.json();
      console.log('Added to photos:', data);
      navigate(`/albums/${albumId}/photos`)
    } catch(err) {
      console.error(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} enctype='multipart/form-data'>
        <label>
          <input type='file' name='file' id='files' accept='.jpg, .jpeg, .png, .gif' multiple />
        </label>
        <Button textColor='white' bgColor='rgb(134,175,237)' text='Submit' />
      </form>
    </>
  )
}
