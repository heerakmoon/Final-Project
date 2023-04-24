import { Link } from 'react-router-dom';

export default function AddButton({buttonName, url}) {
  return (
    <>
      <button style={{cursor: 'pointer'}}>
        <Link to={url}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
        </Link>
      </button>
      <h4>{buttonName}</h4>
    </>
  )
}
