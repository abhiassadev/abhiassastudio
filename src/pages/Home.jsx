import { useEffect, useState } from "react";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { Button, Link } from "@nextui-org/react";

import Event from "../components/Event";
import MainNavbar from "../components/MainNavbar";
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
      <MainNavbar />
      <main className="flex flex-col gap-10 px-7 mt-10 mb-[50vh] sm:mt-40 sm:px-16 xl:px-32 2xl:px-52">
        <div className="flex flex-col text-wrap text-start">
          <p className="text-sm font-semibold text-white opacity-80 mt-3 sm:text-xl sm:w-[60vw]">
            Selamat Datang di
            <span className="font-medium text-green-500 opacity-100 ml-2">
              Abhiassa Studio
            </span>
          </p>
          <h1 className="text-5xl font-bold text-white mt-3 sm:text-6xl">
            Penyedia Jasa Pembuatan<br></br>
            <span className="text-green-500">Website</span>
          </h1>
          <p className="text-sm font-normal text-white opacity-80 mt-3 sm:text-lg sm:w-[60vw]">
            Mudahkan pelanggan mengetahui Informasi tentang Produk, Layanan, dan
            Jasa yang anda miliki dengan Website.
          </p>
          <div className="flex gap-5">
            <Link href="#pricing">
              <Button className="bg-gradient-to-r from-green-500 to-emerald-200 text-base font-semibold text-white mt-10 hover:from-100% hover:duration-500 sm:h-12">
                Buat Sekarang
              </Button>
            </Link>
            <Link href="https://wa.me/6283133793060">
              <Button className="bg-transparent border border-slate-300 text-base font-semibold text-white mt-10 hover:from-100% hover:duration-500 sm:h-12">
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <section id="pricing" className="px-7 sm:px-16 xl:px-32 2xl:px-52">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-green-500 sm:text-3xl">
            Pricing
          </h1>
          <div className="flex flex-col gap-10 mt-10 sm:grid sm:grid-cols-2">
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
      <section id="about" className="px-7 sm:px-16 xl:px-32 2xl:px-52">
        <div className="mt-20 sm:text-center sm:mt-44">
          <h1 className="text-base font-medium text-white sm:text-lg">
            Kenapa Harus Pilih
          </h1>
          <h1 className="text-2xl font-bold text-green-500 sm:text-3xl">
            ABHIASSA STUDIO
          </h1>
          <div className="flex flex-col mt-10 gap-10 sm:flex-row">
            <BanefitCard
              icon="bi bi-currency-dollar"
              title="Harga Terjangkau"
              description="Mulai dari RP 269.900, anda sudah bisa memiliki landing page."
            />
            <BanefitCard
              icon="bi bi-clock"
              title="Waktu Pengerjaan Cepat"
              description="Waktu pengerjaan minimal 4 hari maksimal 2 minggu, tergantung kesulitan projek."
            />
            <BanefitCard
              icon="bi bi-tools"
              title="Pemeliharaan"
              description="Kami siap membantu jika terjadi masalah pada website."
            />
          </div>
        </div>
      </section>
      <section id="portofolio" className="px-7 sm:px-16 xl:px-32 2xl:px-52">
        <div className="mt-20 sm:text-center sm:mt-44">
          <p className="text-base font-medium text-white sm:text-lg">
            Portofolio
          </p>
          <h1 className="text-2xl font-bold text-green-500 sm:text-3xl">
            ABHIASSA STUDIO
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
      <section id="faq" className="px-7 sm:px-16 xl:px-32 2xl:px-52">
        <div className="mt-20 sm:mt-44">
          <h1 className="text-xl font-bold text-green-500">FAQ</h1>
          <div>
            <Accordion variant="light">
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                title={
                  <span className="text-white">
                    Berapa biaya kustom domain?
                  </span>
                }
              >
                <p className="text-base font-normal text-white opacity-80">
                  Harga kustom domain berbeda-beda tergantung kebutuhan dan
                  harga ekstensi domain.
                </p>
              </AccordionItem>
            </Accordion>
            <Accordion>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                title={
                  <span className="text-white">
                    Kapan melakukan pembayaran?
                  </span>
                }
              >
                <p className="text-base font-normal text-white opacity-80">
                  Pembayaran dilakukan di awal order. Menggunakan sistem DP.
                </p>
              </AccordionItem>
            </Accordion>
            <Accordion>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                title={
                  <span className="text-white">
                    Apa perbedaan website statis dan dinamis?
                  </span>
                }
              >
                <p className="text-base font-normal text-white opacity-80">
                  Website Statis adalah website yang kontennya tidak bisa diubah
                  secara praktis, dan tidak ada sistem didalamnya.
                </p>
                <br></br>
                <p className="text-base font-normal text-white opacity-80">
                  Website Dinamis adalah website yang kontennya dapat diubah
                  secara praktis melalui management konten, dan didalamnya
                  memiliki sistem.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <footer
        id="contacts"
        className="bg-slate-900 flex flex-col px-7 py-12 gap-5 mt-20 sm:px-16 sm:gap-16 xl:px-32 2xl:px-52"
      >
        <FooterContent />
      </footer>
    </>
  );
}

export default Home;
