
export default function Button({ textColor, bgColor, text, url }) {
  const buttonStyle = {
    color: textColor,
    backgroundColor: bgColor,
    fontSize: 'large',
    border: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    textAlign: 'right',
  }

  return (
    <>
      <button style={buttonStyle}>
        {text}
      </button>
    </>
  )
}
