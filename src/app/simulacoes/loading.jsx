import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { CreditCardIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { getSimuladores } from "@/actions/simulacoes";
import { Skeleton } from "@/components/ui/skeleton";

export default async function Loading() {

  return (
    <>
      <NavBar active={"simulacoes"}/>

      <main className="bg-slate-900 m-20 p-8">
        <div className="flex justify-between items-center">
          <h2 className=" text-slate-100">Simulações</h2>
          <Button icon={<CurrencyDollarIcon className="h-6 w-6"/>} href="/simulacoes/new">criar simulação</Button>
        </div>

        <div>
          <div id="data" className="text-slate-300">
          {/* {data._links.self.href && (
            <DataRow simulador={data._links.self.href} />
          )} */}
            {Array(3).fill({}).map(() => {
              return (
                <div id="data-row"className="flex justify-between hover:bg-slate-800 p-2 my-2 cursor-pointer row  text-slate-300">
                  <div className="flex gap-1">
                    <Skeleton className="h-6 w-6 bg-slate-600 rounded-full" />

                    <Skeleton className="h-6 w-32 bg-slate-600" />
                  </div>
                  <Skeleton className="h-6 w-10 bg-slate-600" />
                </div>
              )
            })}

          </div>
        </div>
      </main>
    </>
  )
}