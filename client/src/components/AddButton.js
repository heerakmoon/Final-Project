import './AddButton.css';

export default function AddButton({buttonName, url}) {
  return (
    <>
      <div className='addButton'>
        <button style={{cursor: 'pointer', fontSize: '25px'}}>
          +
        </button>
        <h3>{buttonName}</h3>
      </div>
    </>
  )
}
