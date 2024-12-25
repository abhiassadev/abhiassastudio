function Button(props) {
  return (
    <>
      <button
        className={`bg-${props.color} text-sm font-semibold text-${props.textColor} px-3 py-2 mt-10 rounded-lg shadow-lg hover:from-100% hover:duration-500 sm:h-12`}
      >
        {props.title}
      </button>
    </>
  );
}

export default Button;
