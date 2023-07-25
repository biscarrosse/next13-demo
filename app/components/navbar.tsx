"use client";
import Link from "next/link";
import { LINKS } from "@/app/constants/links";
import { useState, createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
import { Button } from "@/app/components/button";

type SidebarType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
export const SidebarContext = createContext<SidebarType>({
  isOpen: false,
  setIsOpen: () => {},
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav>
        <ul className=" p-4 flex flex-col items-center justify-start sm:justify-normal  sm:flex-row bg-black">
          {LINKS.map((i) => (
            <li
              key={i.value}
              className="w-full sm:w-auto mr-4 mb-4 sm:mb-0 underline underline-offset-2 hover:text-blue-400 text-white"
            >
              <Link href={i.value}>{i.label}</Link>
            </li>
          ))}

          <div className="w-full">
            <Button label="Toggle sidebar" />
          </div>
        </ul>

        <p>Is sidebar open? {isOpen ? "Yes!" : "Nope"}</p>
      </nav>
    </SidebarContext.Provider>
  );
};
export default Navbar;
