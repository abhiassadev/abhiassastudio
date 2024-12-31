import Button from "../components/Button";

function PackageCard(props) {
  return (
    <>
      <div className="bg-white border border-slate-200 w-full p-5 rounded-xl shadow-lg sm:w-80">
        <div className="flex-col items-start gap-3">
          <h1 className="text-sm font-semibold text-slate-950">
            {props.packageName}
          </h1>
          <h1 className="text-3xl font-bold text-indigo-600">
            Rp {props.price}
            <span className="text-sm font-medium ml-2">/Tahun</span>
          </h1>
          <p className="text-xs font-normal text-slate-950 opacity-80">
            {props.data.description}
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-5">
          {props.data.banefits.map((banefit, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <div className="bg-indigo-600 w-5 h-5 flex justify-center items-center rounded-full">
                  <i className="bi bi-check text-white"></i>
                </div>
                <p className="text-sm font-normal text-slate-950 opacity-80">
                  {banefit}
                </p>
              </div>
            );
          })}
        </div>
        <div className="gap-3 mt-5">
          <a href={props.data.redirect_link}>
            <Button color="bg-indigo-600" textColor="white" title="Order" />
          </a>
        </div>
      </div>
    </>
  );
}

export default PackageCard;
