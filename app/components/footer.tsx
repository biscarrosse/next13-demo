import Link from "next/link";
import { LINKS } from "@/app/constants/links";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-4">
      <h2 className="mb-2">Site map:</h2>

      <ul className="ml-4 flex flex-col">
        {LINKS.map((i) => (
          <li
            key={i.value}
            className="mb-4 sm:mb-0 underline underline-offset-2 hover:text-blue-400"
          >
            <Link href={i.value}>{i.label}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
