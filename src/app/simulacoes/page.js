import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { getSimuladores } from "@/actions/simulacoes";

export default async function Simulacoes() {
  const data = await getSimuladores()

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
            {data._embedded.entityModelList.map(simulador => {
              return <DataRow simulador={simulador} />
            })}

          </div>
        </div>
      </main>
    </>
  )
}