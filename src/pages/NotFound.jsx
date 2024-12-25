import Button from "../components/Button";
function NotFound() {
  return (
    <>
      <main className="flex justify-center items-center h-screen">
        <div className="text-start">
          <h1 className="text-4xl font-bold text-slate-950">404</h1>
          <h1 className="text-2xl font-bold text-slate-950">
            Halaman tidak ditemukan.
          </h1>
          <p className="text-base font-normal text-slate-950 opacity-80">
            Halaman yang diminta tidak ditemukan.
          </p>
          <a href="/">
            <Button color="slate-950" textColor="text-white" title="Kembali" />
          </a>
        </div>
      </main>
    </>
  );
}

export default NotFound;
