import {
  Chip,
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
      <header className="sticky top-0 z-20 bg-white flex justify-between gap-3 px-5 py-5 sm:flex-row sm:justify-between sm:items-center sm:px-16 sm:py-5">
        <div>
          <Link href="" className="text-xl font-bold text-black sm:text-2xl">
            Abhiassa Studio
          </Link>
        </div>
        <nav className="hidden">
          <ul className="flex gap-5">
            <li>
              <Link href="#">
                <Chip className="bg-slate-100 text-sm font-medium text-black rounded-lg sm:text-base">
                  Home
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="#pricing">
                <Chip className="bg-slate-100 text-sm font-medium text-black rounded-lg sm:text-base">
                  Pricing
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="#portofolio">
                <Chip className="bg-slate-100 text-sm font-medium text-black rounded-lg sm:text-base">
                  Portofolio
                </Chip>
              </Link>
            </li>
            <li>
              <Link href="#faq">
                <Chip className="bg-slate-100 text-sm font-medium text-black rounded-lg sm:text-base">
                  Faq
                </Chip>
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly className="bg-transparent">
                <i className="bi bi-list text-2xl text-black"></i>
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem>
                <Link href="/">Home</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="#pricing">Pricing</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="#portofolio">Portofolio</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="#about">About</Link>
              </DropdownItem>
              <DropdownItem>
                <Link href="#faq">Faq</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </header>
    </>
  );
}

export default MainNavbar;
