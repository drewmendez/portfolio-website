"use client";

import { useToggleContext } from "@/context/ToggleState";
import { IoMenu, IoClose } from "react-icons/io5";

export default function MenuButton() {
  const { isOpen, setIsOpen } = useToggleContext();

  return (
    <button
      className="text-3xl text-[#2d2e32] sm:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <IoClose /> : <IoMenu />}
    </button>
  );
}
