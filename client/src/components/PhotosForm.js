import Button from "../components/Button";

export default function PhotosForm() {

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label>
          <input type='file' name='file' id='files' accept='.jpg, .jpeg, .png, .gif' multiple />
        </label>
        <Button textColor='white' bgColor='rgb(134,175,237)' text='Submit' />
      </form>
    </>
  )
}
