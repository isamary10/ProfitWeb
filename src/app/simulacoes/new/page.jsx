"use client"

import { create } from "@/actions/simulacoes";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormSimulacao(){
  const [message, setMessage] = useState("")

  async function handleSubmit(formData){
    const resp = await create(formData)
    if (resp.error){
      setMessage(resp.error)
      return
    }
    redirect("/simulacoes")
  }

  return(
    <>
      <NavBar active={"simulacoes"}/>

      <main className="bg-slate-900 mt-10 p-8 rounded max-w-lg m-auto">
        <h2 className="text-slate-100 font-bold">Fazer simulação</h2>

        <form action={handleSubmit}>
          <TextInput name="valor" id="valor" label="valor"/>
          <TextInput name="aporte" id="aporte" label="aporte"/>
          <TextInput name="tipoInvest" id="tipoInvest" label="tipo investimento"/>
          <TextInput name="juros" id="juros" label="juros"/>
          <TextInput name="tempoInvest" id="meses" label="meses"/>
          {/* <TextInput name="usuario[id]" id="id" label="id"/>
          <TextInput name="rendimento" id="rendimento" label="rendimento"/> */}

          <div className="flex justify-around">
            <Button href="/simulacoes" variant="secundary" icon={<ArrowLeftIcon className="h6 w-4"/>} >
              cancelar
            </Button> 
            <Button element="button" icon={<CheckIcon className="h6 w-4" />}>
              salvar
            </Button>
          </div>
          <p>{message}</p>
        </form>
      </main>
    </>

  )
}