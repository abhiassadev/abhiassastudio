// import MainNavbar from

import MainNavbar from "../components/MainNavbar";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Input, Button } from "@nextui-org/react";

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
      <MainNavbar />
      <main className="px-5 py-10">
        <section>
          <div>
            <h1 className="text-2xl font-semibold text-emerald-400">
              Form Checkout
            </h1>
            <p className="text-sm font-normal text-black opacity-80">
              Silahkan isi form di bawah ini!
            </p>
            <p className="text-sm font-normal text-black opacity-80 mt-5">
              Paket yang dipilih: {packageId.name}
            </p>
            <p className="text-sm font-normal text-black opacity-80">
              Silahkan isi form di bawah ini!
            </p>
          </div>
          <form onSubmit={checkout} className="flex flex-col gap-5 mt-5">
            <Input
              type="text"
              placeholder="Masukan nama"
              value={client_name}
              onChange={(e) => setClient_name(e.target.value)}
            />
            <Input
              type="number"
              placeholder="Masukan no handphone"
              value={client_phone}
              onChange={(e) => setClient_phone(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Masukan email"
              value={client_email}
              onChange={(e) => setClient_email(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-700 to-emarald-200 text-md font-semibold text-white"
            >
              Lanjutkan
            </Button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Checkout;
