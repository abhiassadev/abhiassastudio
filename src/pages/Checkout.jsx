// import MainNavbar from

import Navbar from "../components/Navbar";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../components/Button";

function Checkout() {
  const [data, setData] = useState([]);
  const [client_name, setClient_name] = useState("");
  const [client_phone, setClient_phone] = useState(null);
  const [client_email, setClient_email] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {})

  useEffect(() => {
    fetch("/data/packages.json")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      });
  }, []);

  const { id } = useParams();
  const packageId = data.find((data) => data.id === parseInt(id));

  const checkout = async (e) => {
    e.preventDefault();
    const order_id = packageId.id + Date.now();
    const package_id = packageId.id;
    const package_name = packageId.name;
    const package_price = packageId.price;
    const data = {
      order_id,
      package_id,
      package_name,
      package_price,
      client_name,
      client_phone,
      client_email,
    };

    const response = await fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    window.snap.pay(result);
  };

  if (loading) {
    return <>Loading</>;
  }
  return (
    <>
      <Navbar />
      <main className="px-5 py-10">
        <section>
          <div>
            <h1 className="text-2xl font-bold text-green-500">Rincian order</h1>
            <div className="mt-5">
              <div className="border border-green-500 rounded-2xl flex justify-between items-center p-3">
                <div>
                  <h6 className="text-lg font-semibold text-white">Website</h6>
                  <p className="text-sm font-medium text-white">
                    {packageId.name}
                  </p>
                </div>
                <div className="flex gap-3">
                  <h6 className="text-sm font-medium text-white">
                    Rp {packageId.price}
                  </h6>
                  <div className="bg-green-500 w-4 h-4 flex justify-center items-center rounded-full">
                    <i className="bi bi-check text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={checkout} className="flex flex-col gap-5 mt-5">
            <input
              type="text"
              label="Nama"
              placeholder="Masukan nama"
              value={client_name}
              onChange={(e) => setClient_name(e.target.value)}
              classNames={{
                label: ["text-md font-medium"],
                input: ["bg-slate-900"],
                InputWrapper: ["bg-slate-900", "outline-green-500"],
              }}
            />
            <input
              type="number"
              placeholder="Masukan no handphone"
              value={client_phone}
              onChange={(e) => setClient_phone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Masukan email"
              value={client_email}
              onChange={(e) => setClient_email(e.target.value)}
            />
            <Button type="submit" color="slate-950" title="Lanjutkan" />
          </form>
        </section>
      </main>
    </>
  );
}

export default Checkout;
