import { useState, useRef } from "react";
import Button from "../components/Button";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleButtonRef = useRef(null);

  document.addEventListener("click", (e) => {
    if (
      toggleButtonRef.current &&
      !toggleButtonRef.current.contains(e.target)
    ) {
      setIsActive(false);
    }
  });

  return (
    <>
      <header className="sticky top-0 z-10 bg-white border border-slate-300 px-5 py-5">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a
                href=""
                className="text-lg font-bold text-slate-950 sm:text-xl"
              >
                Abhiassa Studio
              </a>
            </div>
            <nav className="hidden sm:flex">
              <ul className="flex gap-5">
                <li className="">
                  <a
                    href="/"
                    className="text-sm font-medium text-slate-950 hover:opacity-80"
                  >
                    Home
                  </a>
                </li>
                <li className="">
                  <a
                    href="#pricing"
                    className="text-sm font-medium text-slate-950 hover:opacity-80"
                  >
                    Pricing
                  </a>
                </li>
                <li className="">
                  <a
                    href="#banefits"
                    className="text-sm font-medium text-slate-950 hover:opacity-80"
                  >
                    Banefits
                  </a>
                </li>
                <li className="">
                  <a
                    href="#portofolio"
                    className="text-sm font-medium text-slate-950 hover:opacity-80"
                  >
                    Portofolio
                  </a>
                </li>
                <li className="">
                  <a
                    href="#contacts"
                    className="text-sm font-medium text-slate-950 hover:opacity-80"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center">
              <a href="https://wa.me/6283133793060" className="hidden sm:flex">
                <Button
                  color="slate-950"
                  textColor="white"
                  title="Buat Website"
                />
              </a>
              <button
                id="toggleButton"
                onClick={() => setIsActive(!isActive)}
                ref={toggleButtonRef}
                className="block sm:hidden"
              >
                <span className="block bg-slate-500 w-5 h-[2px] my-2 rounded-lg"></span>
                <span className="block bg-slate-500 w-5 h-[2px] my-2 rounded-lg"></span>
              </button>
              {isActive && (
                <div className="absolute top-16 left-0 z-10 bg-white border-b border-slate-300 w-full p-5 py-10">
                  <ul className="flex flex-col gap-5">
                    <li className="py-3 border-b border-slate-300">
                      <a
                        href="#"
                        className="text-sm font-medium text-slate-950 hover:opacity-80"
                      >
                        Home
                      </a>
                    </li>
                    <li className="py-3 border-b border-slate-300">
                      <a
                        href="#pricing"
                        className="text-sm font-medium text-slate-950 hover:opacity-80"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="py-3 border-b border-slate-300">
                      <a
                        href="#banefits"
                        className="text-sm font-medium text-slate-950 hover:opacity-80"
                      >
                        Banefits
                      </a>
                    </li>
                    <li className="py-3 border-b border-slate-300">
                      <a
                        href="#portofolio"
                        className="text-sm font-medium text-slate-950 hover:opacity-80"
                      >
                        Portofolio
                      </a>
                    </li>
                    <li className="py-3 border-b border-slate-300">
                      <a
                        href="#contacts"
                        className="text-sm font-medium text-slate-950 hover:opacity-80"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
