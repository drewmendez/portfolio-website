"use client";

import { useToggleContext } from "@/context/ToggleState";
import Link from "next/link";

export default function MobileNav() {
  const { isOpen, setIsOpen } = useToggleContext();

  return (
    <aside
      className={`fixed top-[80px] ${
        isOpen ? "left-0" : "-left-full"
      } z-10 h-full w-full bg-[#fff] px-6 py-6 transition-all duration-300`}
    >
      <nav className="grid justify-items-center font-semibold text-[#2d2e32] text-2xl gap-8 mt-10">
        <Link href="/" onClick={() => setIsOpen(!isOpen)}>
          Home
        </Link>
        <Link href="/" onClick={() => setIsOpen(!isOpen)}>
          Projects
        </Link>
        <Link href="/" onClick={() => setIsOpen(!isOpen)}>
          About
        </Link>
        <Link href="/" onClick={() => setIsOpen(!isOpen)}>
          Contact
        </Link>
      </nav>
    </aside>
  );
}
