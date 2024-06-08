import Link from "next/link";
import MobileNav from "./MobileNav";
import MenuButton from "./ui/MenuButton";

export default function Header() {
  return (
    <>
      <header className="py-6 px-6 shadow-[0_0_10px_rgba(0,0,0,.09)] fixed w-full top-0 z-10 bg-white md:px-16">
        <nav className="flex justify-between items-center">
          <a className="font-extrabold text-2xl text-[#2d2e32]" href="/">
            Drew.dev
          </a>
          <div className="hidden sm:flex text-[#2d2e32] gap-5 font-semibold">
            <Link className="duration-300 hover:opacity-70" href="/">
              Home
            </Link>
            <Link className="duration-300 hover:opacity-70" href="#projects">
              Projects
            </Link>
            <Link className="duration-300 hover:opacity-70" href="#about">
              About
            </Link>
            <Link className="duration-300 hover:opacity-70" href="/">
              Contact
            </Link>
          </div>
          <MenuButton />
        </nav>
      </header>
      <MobileNav />
    </>
  );
}
