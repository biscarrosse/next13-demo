import "./globals.css";
import { Chivo } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Chivo({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="mx-8 mb-8 min-h-screen">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
