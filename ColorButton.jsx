function ColorButton({ color, label, onClick }) {
  return (
    <button
      className="color-button"
      onClick={onClick}
      style={{ backgroundColor: color, color: 'white' }}
    >
      {label}
    </button>
  );
}

export default ColorButton;
