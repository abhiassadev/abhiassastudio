function Button(props) {
  return (
    <>
      <button
        className={`${props.color} text-sm font-semibold text-${props.textColor} px-3 py-3 rounded-xl shadow-lg ${props.className}`}
      >
        {props.title}
      </button>
    </>
  );
}

export default Button;
