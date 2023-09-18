import { getSimulador } from "@/actions/simulacoes";
import NavBar from "@/components/NavBar";
import TextInput from "@/components/TextInput";


export default async function FormSimulacaoEdit({params}){

  const simulador = await getSimulador(params.id)

  return(
    <>
      <NavBar active={"simulacoes"}/>

      <main className="bg-slate-900 mt-10 p-8 rounded max-w-lg m-auto">
        <h2 className="text-slate-100 font-bold">Editar simulação</h2>
          {/* <TextInput name="aporte" id="aporte" label="aporte" value={simulador.aporte}/>
          <TextInput name="tipoInvest" id="tipoInvest" label="tipo investimento" value={simulador.tipoInvest}/>
          <TextInput name="juros" id="juros" label="juros" value={simulador.juros}/>
          <TextInput name="tempoInvest" id="meses" label="meses" value={simulador.tempInvest}/> */}
          {/* <TextInput name="usuario[id]" id="id" label="id"/>
          <TextInput name="rendimento" id="rendimento" label="rendimento"/> */}
          <form simulador={simulador} />

      </main>
    </>

  )
}