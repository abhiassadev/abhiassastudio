import { useEffect, useState } from "react";

import Button from "../components/Button";

import Event from "../components/Event";
import Navbar from "../components/Navbar";
import PackageCard from "../components/PackageCard";
import BanefitCard from "../components/BanefitCard";
import ProjectCard from "../components/ProjectCard";
import FooterContent from "../components/FooterContent";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/packages.json")
      .then((result) => result.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Event />
      <Navbar />
      <main className="flex flex-col gap-10 px-7 mt-10 mb-[50vh] sm:mt-40 sm:px-16 xl:px-32 2xl:px-52">
        <div className="flex flex-col text-wrap text-center">
          <h1 className="text-5xl font-bold text-slate-950 mt-3 sm:text-6xl">
            Tampilkan Bisnis-mu Dengan<br></br>
            <span className="text-slate-950">Website</span>
          </h1>
          <p className="text-base font-normal text-slate-950 opacity-80 mt-3 sm:text-xl">
            Mudahkan pelanggan mengetahui bisnis-mu dengan Website.
          </p>
          <div className="flex justify-center items-center gap-5 mt-10">
            <a href="#pricing">
              <Button
                color="slate-950"
                textColor="white"
                title="Buat Webesite"
              />
            </a>
            <a href="https://wa.me/6283133793060">
              <Button
                color="transparent"
                textColor="slate-950"
                title="Hubungi Kami"
              />
            </a>
          </div>
        </div>
      </main>
      <section id="pricing" className="px-7 sm:px-16 xl:px-32 2xl:px-52">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
            Pricing
          </h1>
          <div className="flex flex-col gap-10 mt-10 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {data?.map((data) => {
              return (
                <PackageCard
                  key={data.id}
                  packageName={data.name}
                  price={data.price}
                  data={data}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="banefits"
        className="px-7 mt-20 sm:px-16 xl:px-32 2xl:px-52 sm:mt-44"
      >
        <div className="sm:text-center text-center">
          <h1 className="text-base font-medium text-slate-950 opacity-80 sm:text-lg">
            Kenapa Harus Pilih
          </h1>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
            Abhiassa Studio
          </h1>
          <div className="flex flex-col justify-center items-center gap-10 mt-10 sm:flex-row sm:h-96 sm:mt-0">
            <BanefitCard
              icon="bi bi-currency-dollar"
              title="Harga Terjangkau"
              description="Mulai dari RP 269.900, anda sudah bisa memiliki website landing page."
            />
            <BanefitCard
              icon="bi bi-clock"
              title="Waktu Pengerjaan Cepat"
              description="Waktu pengerjaan minimal 4 hari maksimal 2 minggu, tergantung komplexnya projek."
            />
            <BanefitCard
              icon="bi bi-tools"
              title="Pemeliharaan"
              description="Kami siap membantu jika terjadi masalah pada website."
            />
          </div>
        </div>
      </section>
      <section
        id="portofolio"
        className="px-7 mt-20 sm:px-16 sm:mt-44 xl:px-32 2xl:px-52"
      >
        <div className="text-center">
          <p className="text-base font-medium text-slate-950 opacity-80 sm:text-lg">
            Portofolio
          </p>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-5xl">
            Abhiassa Studio
          </h1>
          <div className="flex flex-col gap-5 mt-10 sm:grid sm:grid-cols-2">
            <ProjectCard
              projectImage="/image1.jpeg"
              projectName="Toko Online"
              projectLink="https://dreamour.vercel.app"
            />
          </div>
        </div>
      </section>
      <footer
        id="contacts"
        className="bg-slate-950 flex flex-col px-7 py-12 gap-5 mt-20 sm:px-16 sm:mt-44 sm:gap-16 xl:px-32 2xl:px-52"
      >
        <FooterContent />
      </footer>
    </>
  );
}

export default Home;
