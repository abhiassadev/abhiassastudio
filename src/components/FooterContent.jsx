function FooterContent() {
  return (
    <>
      <div>
        <h1 className="text-xl font-bold text-white">ABHIASSA STUDIO</h1>
      </div>
      <div className="flex flex-col gap-10 sm:grid sm:grid-cols-2">
        <div className="flex flex-col">
          <h1 className="text-lg font-medium text-white">Kontak</h1>
          <a
            href="https://wa.me/6283133793060"
            className="text-white opacity-80"
          >
            +62 831 3379 3060
          </a>
          <a
            href="mailto:abhiassastudio@gmail.com"
            className="text-white opacity-80"
          >
            abhiassastudio@gmail.com
          </a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-medium text-white">Media Sosial</h1>
          <a
            href="https://www.facebook.com/share/1Ark1bbcTt/"
            className="text-white opacity-80"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/abhiassastudio"
            className="text-white opacity-80"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@abhiassastudio"
            className="text-white opacity-80"
          >
            TikTok
          </a>
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-medium text-white">Pembayaran</h1>
          <a href="https://gopay.co.id" className="text-white opacity-80">
            Gopay
          </a>
          <a
            href="https://www.bankmandiri.co.id"
            className="text-white opacity-80"
          >
            M-Banking
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p className="text-sm font-normal text-white opacity-80">
          &copy; 2024 ABHIASSA STUDIO
        </p>
      </div>
    </>
  );
}

export default FooterContent;
