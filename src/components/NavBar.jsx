"use client"

import { AuthContext } from "@/context/AutoContext";
import Link from "next/link";
import { useContext } from "react";
import Button from "./Button";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";

export default function NavBar({ active }) {
  const {user, logout} = useContext(AuthContext)
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

      <div className="flex items-center gap-2">
        {user?.nome}
        <div className="h-14 w-14 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
        </div>
        <Button onClick={logout} variant="secundary" element="button" icon={<ArrowLeftOnRectangleIcon className="h-4 w-4" />}>
          sair
        </Button>
      </div>

    </nav>

  )
}