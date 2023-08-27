import DropMenu from "@/components/DropMenu";
import { BeakerIcon } from '@heroicons/react/24/outline'

export default function DataRow({ curso }) {
  return (

      <div id="data-row"className="flex justify-between hover:bg-slate-800 p-2 my-2 cursor-pointer row  text-slate-300">
        <div className="flex gap-1">
          <BeakerIcon className="h-6 w-6 text-blue-500" />
          <span>{curso.nome}</span>
        </div>
        <span>Duração: {curso.duracao}</span>
        <div>
          <DropMenu className="text-slate-300"/>
        </div>
      </div>

  )
}