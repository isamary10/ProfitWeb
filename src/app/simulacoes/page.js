import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getSimuladores(){
  const url = "http://localhost:8080/api/simuladores"
  const response = await fetch(url, { next: { revalidate: 0 } })
  return response.json()
}

export default async function Simulacoes() {
  const data = await getSimuladores()

  return (
    <>
      <NavBar active={"simulacoes"}/>

      <main className="bg-slate-900 m-20 p-8">
        <h2 className=" text-slate-100">Simulações</h2>
        <div>
          <div id="data" className="text-slate-300">
            {data._embedded.entityModelList.map(simulador => {
              return <DataRow simulador={simulador} />
            })}

          </div>
        </div>
      </main>
    </>
  )
}