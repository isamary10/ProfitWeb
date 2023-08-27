import Link from "next/link";

export default function NavBar({ active }) {
  return (
    <nav className="flex justify-between items-center bg-slate-700 px-6 py-4">
      <ul className="flex gap-40 items-end">
        <li>
          <Link href="/">
            <h1 className="text-2xl text-slate-100">
              Profit
            </h1>
          </Link>
        </li>
        <li>
          <Link className={active == "cursos" && "text-rose-100"} href="/cursos">
              cursos
          </Link>
        </li>
        <li>
          <Link className={active == "simulacoes" && "text-slate-300"} href="/simulacoes">
              simulacao
          </Link>
        </li>
      </ul>

      <div className="h-14 w-14 rounded-full overflow-hidden">
        <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
      </div>
    </nav>

  )
}