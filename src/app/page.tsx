import Link from "next/link"

export default function Home() {
  return (
    <>
      <header className="bg-red-500 w-screen h-16">
        <nav className="flex flex-row h-full w-full items-center">
          <div className="flex items-center w-full justify-around">
            <ul>
              <Link className="hover:text-sky-500 hover:bg-black/10 hover:rounded p-2" href={"/"}>Home</Link>
            </ul>
            <ul className="flex flex-row [&>*]:mr-5 [&_a]:content-center">
              <Link className="hover:text-white hover:bg-black/10 p-2 hover:rounded" href={"/"}>Page 1</Link>
              <Link className="hover:text-white hover:bg-black/10 p-2 hover:rounded" href={"/"}>Page 2</Link>
              <Link className="hover:text-white hover:bg-black/10 p-2 hover:rounded" href={"/"}>Page 3</Link>
            </ul>
          </div>
        </nav>
      </header>
      <main className="w-screen h-screen ">
        <div className="mx-32 my-10">
          <h1>Hola</h1>
          <p>Este es un parrafo</p>
        </div>
      </main>
      <footer className="bg-red-600 h-auto w-full flex flex-col items-center justify-center py-10">
        <p>Éste es un footer ❤ ❤ 🙌 || Copiright 2024</p>
        <hr className="w-3/12 bg-red-800 border-y-0 mt-2 h-1 " />
        <Link target="_blank" href={"https://github.com/Ivan9912/matinext"} className="hover:text-white mt-4">Maidana Iván (GitHub)</Link>
      </footer>
    </>
    )
}
