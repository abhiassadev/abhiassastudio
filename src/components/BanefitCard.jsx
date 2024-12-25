function BanefitCard(props) {
  return (
    <>
      <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-lg sm:w-52">
        <div>
          <div className="bg-slate-950 w-10 h-10 rounded-full flex justify-center items-center">
            <i className={`${props.icon} text-lg text-white`}></i>
          </div>
        </div>
        <div className="text-start mt-3">
          <h1 className="text-md font-semibold text-slate-950">
            {props.title}
          </h1>
          <p className="text-sm font-normal text-slate-950 opacity-80">
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default BanefitCard;
