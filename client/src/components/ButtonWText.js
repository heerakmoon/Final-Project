
export default function ButtonWText({ textColor, bgColor, text }) {
  const buttonStyle = {
    color: textColor,
    backgroundColor: bgColor,
    border: 'none',
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
