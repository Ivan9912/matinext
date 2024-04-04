import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mati | Feria",
  description: "Feria para ventas de productos usados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-418">
      <body className={inter.className}>
        <header className="bg-red-500 w-screen h-16">
          <nav className="flex flex-row h-full w-full items-center">
            <div className="flex items-center w-full justify-around">
              <ul>
                <Link className="hover:text-sky-500 hover:bg-black/10 hover:rounded p-2" href={"/"}>Home</Link>
              </ul>
              <ul className="flex flex-row md:[&>*]:mr-5 [&>*]:mr-1 [&_a]:content-center">
                <Link className="hover:text-white hover:bg-black/10 p-2 hover:rounded" href={"/"}>Page 1</Link>
                <Link className="hover:text-white hover:bg-black/10 p-2 hover:rounded" href={"/"}>Page 2</Link>
                <Link className="hover:text-white hover:bg-black/10 p-2 hover:rounded" href={"/"}>Page 3</Link>
              </ul>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-red-600 h-auto w-full flex flex-col items-center justify-center py-10">
          <p>Ésto, es un Footer. ❤ ❤ 🙌</p>
          <hr className="w-3/12 bg-red-800 border-y-0 mt-2 h-1" />
          <Link target="_blank" href={"https://github.com/Ivan9912/matinext"} className="hover:text-white mt-4">© Copiright {new Date().getFullYear()} | Maidana Iván (GitHub)</Link>
        </footer>
      </body>
    </html>
  );
}
