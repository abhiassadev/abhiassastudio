import { Link } from "@nextui-org/react";

function FooterContent() {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold text-emerald-400">ABHIASSA STUDIO</h1>
      </div>
      <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2">
        <div className="flex flex-col">
          <h1 className="text-lg font-medium text-black">Kontak</h1>
          <Link
            href="https://wa.me/6283133793060"
            className="text-black opacity-80"
          >
            +62 831 3379 3060
          </Link>
          <Link
            href="mailto:abhiassastudio@gmail.com"
            className="text-black opacity-80"
          >
            abhiassastudio@gmail.com
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-medium text-black">Media Sosial</h1>
          <Link
            href="https://www.facebook.com/share/1Ark1bbcTt/"
            className="text-black opacity-80"
          >
            Facebook
          </Link>
          <Link
            href="https://www.instagram.com/abhiassastudio"
            className="text-black opacity-80"
          >
            Instagram
          </Link>
          <Link
            href="https://www.tiktok.com/@abhiassastudio"
            className="text-black opacity-80"
          >
            TikTok
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-medium text-black">Pembayaran</h1>
          <Link href="https://gopay.co.id" className="text-black opacity-80">
            Gopay
          </Link>
          <Link
            href="https://www.bankmandiri.co.id"
            className="text-black opacity-80"
          >
            M-Banking
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p className="text-sm font-normal text-black opacity-80">
          &copy; 2024 ABHIASSA STUDIO
        </p>
      </div>
    </>
  );
}

export default FooterContent;
