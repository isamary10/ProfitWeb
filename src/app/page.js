import { getSimuladores } from "@/actions/simulacoes";
import CardSimulador from "@/components/CardSimulador";
import NavBar from "@/components/NavBar";

export default async function Home() {

  const simuladores = await getSimuladores()
  return (
    <>
    <NavBar />

    <main className="max-w-3xl m-auto">
      <div className="grid auto-cols-max grid-flow-col gap-5 p-5 overflow-x-auto">
        {simuladores.map(simulador => <CardSimulador key={simulador.id} simulador={simulador} />)}
      </div>
    </main>
    </>
  )
}
