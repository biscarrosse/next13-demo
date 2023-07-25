import { useContext } from "react";
import { SidebarContext } from "@/app/components/navbar";

type ButtonProps = {
  label: string;
};
export const Button = ({ label }: ButtonProps) => {
  const ctx = useContext(SidebarContext);

  const handleClick = () => ctx.setIsOpen(!ctx.isOpen);

  return (
    <button
      onClick={handleClick}
      className="p-2 mr-4 mb-4 sm:mb-0 bg-blue-600 rounded-lg hover:bg-blue-500 text-white"
    >
      {label}
    </button>
  );
};
