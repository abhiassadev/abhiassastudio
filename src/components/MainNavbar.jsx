import {
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

function MainNavbar() {
  return (
    <>
      <header className="sticky top-0 z-20 bg-transparent backdrop-blur-xl flex justify-between items-center gap-3 px-7 py-5 sm:flex-row sm:justify-between sm:items-center sm:px-16 sm:py-5 xl:px-32 2xl:px-52">
        <div>
          <Link href="" className="text-xl font-bold text-white sm:text-2xl">
            Abhiassa Studio
          </Link>
        </div>
        <nav className="hidden sm:flex">
          <ul className="flex gap-10">
            <li>
              <Link href="#" className="text-white opacity-80">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-white opacity-80">
                Banefits
              </Link>
            </li>
            <li>
              <Link href="#pricing" className="text-white opacity-80">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-white opacity-80">
                About
              </Link>
            </li>
            <li>
              <Link href="#portofolio" className="text-white opacity-80">
                Portofolio
              </Link>
            </li>
            <li>
              <Link href="#faq" className="text-white opacity-80">
                Faq
              </Link>
            </li>
          </ul>
        </nav>
        <div className="sm:hidden">
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly className="bg-transparent">
                <i className="bi bi-list text-2xl text-white"></i>
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>
                <Link href="/" className="text-black">
                  Home
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="#pricing" className="text-black">
                  Pricing
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="#portofolio" className="text-black">
                  Portofolio
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="#about" className="text-black">
                  About
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="#faq" className="text-black">
                  Faq
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </header>
    </>
  );
}

export default MainNavbar;
