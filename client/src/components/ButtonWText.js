
export default function ButtonWText({ textColor, bgColor, text }) {
  const buttonStyle = {
    color: textColor,
    backgroundColor: bgColor,
    border: 'none',
    padding: '5px 12px',
    cursor: 'pointer',
  }

  return (
    <>
      <button style={buttonStyle}>
        {text}
      </button>
    </>
  )
}
