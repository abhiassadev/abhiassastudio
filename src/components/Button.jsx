function Button(props) {
  return (
    <>
      <button
        id={props.id}
        aria-label={props.ariaLabel}
        className={`bg-${props.color} text-sm font-semibold text-${props.textColor} px-3 py-3 rounded-lg shadow-lg`}
      >
        {props.title}
      </button>
    </>
  );
}

export default Button;
