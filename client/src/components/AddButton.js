// import { Link } from 'react-router-dom';

export default function AddButton({buttonName, url}) {
  return (
    <>
      <button style={{cursor: 'pointer', fontSize: '25px'}}>
        +
      </button>
      <h4>{buttonName}</h4>
    </>
  )
}
