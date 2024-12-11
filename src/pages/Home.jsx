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
      {/* <Category /> */}
      <main className="px-5 sm:px-16">
        <section className="flex flex-col gap-10 mt-32 mb-[50vh] sm:mt-44">
          <div className="flex flex-col justify-center items-center text-wrap text-center">
            <h1 className="text-2xl font-semibold text-emerald-300 tracking-wide sm:text-4xl">
              Mudahkan Pelanggan<br></br>
              <strong className="text-4xl text-emerald-400 sm:text-6xl">
                Dengan Website
              </strong>
            </h1>
            <p className="text-base font-normal text-black opacity-80 mt-3 sm:text-lg sm:w-[60vw]">
              Mudahkan pelanggan mengetahui Informasi tentang Produk, Layanan,
              dan Jasa yang anda miliki dengan Website.
            </p>
            <Link href="#pricing">
              <Button className="bg-gradient-to-tr from-blue-500 to-emerald-100 text-base font-semibold text-white mt-10 sm:h-12">
                Buat Sekarang
              </Button>
            </Link>
          </div>
        </section>
        <section id="pricing">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold text-emerald-400 sm:text-3xl">
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
        <section id="about">
          <div className="mt-20 sm:text-center sm:mt-44">
            <h1 className="text-base font-medium text-emerald-300 sm:text-lg">
              Kenapa Harus Pilih
            </h1>
            <h1 className="text-2xl font-bold text-emerald-400 sm:text-3xl">
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
        <section id="portofolio">
          <div className="mt-20 sm:text-center sm:mt-44">
            <p className="text-base font-medium text-emerald-300 sm:text-lg">
              Portofolio
            </p>
            <h1 className="text-2xl font-bold text-emerald-400 sm:text-3xl">
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
        <section id="faq">
          <div className="mt-20 sm:mt-44">
            <h1 className="text-xl font-bold text-emerald-400">FAQ</h1>
            <div>
              <Accordion>
                <AccordionItem
                  key="1"
                  aria-label="Accordion 1"
                  title="Berapa biaya kustom domain?"
                >
                  <p className="text-base font-normal text-black opacity-80">
                    Harga kustom domain berbeda-beda tergantung kebutuhan dan
                    harga ekstensi domain.
                  </p>
                </AccordionItem>
              </Accordion>
              <Accordion>
                <AccordionItem
                  key="2"
                  aria-label="Accordion 2"
                  title="Kapan melakukan pembayaran?"
                >
                  <p className="text-base font-normal text-black opacity-80">
                    Pembayaran dilakukan di awal order.
                  </p>
                </AccordionItem>
              </Accordion>
              <Accordion>
                <AccordionItem
                  key="3"
                  aria-label="Accordion 3"
                  title="Apa perbedaan website statis dan dinamis?"
                >
                  <p className="text-base font-normal text-black opacity-80">
                    Website Statis adalah website yang kontennya tidak bisa
                    diubah secara praktis, dan tidak ada sistem didalamnya.
                  </p>
                  <br></br>
                  <p className="text-base font-normal text-black opacity-80">
                    Website Dinamis adalah website yang kontennya dapat diubah
                    secara praktis melalui management konten, dan didalamnya
                    memiliki sistem.
                  </p>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <footer
        id="contacts"
        className="bg-gray-50 flex flex-col px-5 py-12 gap-5 mt-20 sm:px-16 sm:gap-16"
      >
        <FooterContent />
      </footer>
    </>
  );
}

export default Home;
