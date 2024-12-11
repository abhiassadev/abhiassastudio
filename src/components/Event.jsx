import { Link } from "@nextui-org/react";

function Event() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-emerald-200 h-10 w-full flex justify-center items-center sm:h-16">
        <Link
          href="https://wa.me/6283133793060"
          className="text-sm font-medium text-white sm:text-base"
        >
          Dapatkan potongan harga sebesar RP 20 ribu!
        </Link>
      </div>
    </>
  );
}

export default Event;
