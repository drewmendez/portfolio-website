"use client";

import * as React from "react";
import { createContext, useState } from "react";

interface ContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleContext = createContext<ContextProps | null>(null);

export default function ToggleContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleContext value={{ isOpen, setIsOpen }}>
      {children}
    </ToggleContext>
  );
}

export const useToggleContext = () => {
  const context = use(ToggleContext);
  if (!context) {
    throw new Error(
      "Toggle context should be used within ToggleContextProvider"
    );
  }
  return context;
};
