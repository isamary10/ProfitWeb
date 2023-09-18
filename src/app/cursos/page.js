import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getCursos(){
  const url = "https://profit-production-a4ce.up.railway.app/api/cursos"
  const response = await fetch(url, { next: { revalidate: 0 } })
  return response.json()
}

export default async function Cursos() {
  const data = await getCursos()

  return (
    <>
      <NavBar active={"cursos"}/>

      <main className="bg-slate-900 m-20 p-8">
        <h2 className=" text-slate-100">Cursos</h2>
        <div>
          <div id="data" className="text-slate-300">
            {data._links.self.href && (
              <DataRow curso={data._links.self.href} />
            )}
            {/* {data._embedded.entityModelList.map(curso => {
              return <DataRow curso={curso} />
            })} */}

          </div>
        </div>
      </main>
    </>
  )
}