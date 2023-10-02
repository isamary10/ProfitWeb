import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Monomaniac_One} from "next/font/google"

const mono = Monomaniac_One({
  weight: '400',
  subsets: ['latin']
})

export default function CardSimulador({simulador}){
  const valor = simulador.valor.toLocaleString("pt-BR", {minumunFractionDigits: 2, maximumFractionDigits: 2})
  const rendimento = simulador.valor.toLocaleString("pt-BR", {minumunFractionDigits: 2, maximumFractionDigits: 2})

  return(
    <div className="gap-2 bg-slate-900 max-w-sm rounded p-3">
      <div className="flex items-center gap-3">
        <CurrencyDollarIcon className="h-8 w-8 text-slate-200"/>
        <span className="text-xl">{simulador.tipoInvest}</span>
      </div>
      <div >
        <span>Valor investido: </span>
        <span className={`${mono.className} text-rose-600`}>R$ {valor}</span>
      </div>
      <div>
        <span>Retorno investido: </span>
        <span className={`${mono.className} text-emerald-400`}>R$ {rendimento}</span>
      </div>
      <div>
        <span className="text-sm">{simulador.tempoInvest} meses</span>
      </div>
    </div>
  )
}