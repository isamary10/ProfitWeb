"use client"

import { update } from "@/actions/simulacoes"
import Button from "@/components/Button"
import TextInput from "@/components/TextInput"
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/24/outline"
import { redirect } from "next/dist/server/api-utils"
import { useState } from "react"

export default function form({simulador}){

  const [simuladorEdit, setSimuladorEdit] = useState(simulador)

  function handleFieldChange(field, value){
    setSimuladorEdit({
      ...simuladorEdit,
      [field]: value
    })
  }

  async function handleSubmit(){
    const response = await update(simuladorEdit)
    if (response?.error){
      setError(response.error)
      return
    }

    redirect("/simulador")
  }

  return (
    <form action={handleSubmit}>
          <TextInput
            name="valor"
            id="valor"
            label="valor"
            value={simuladorEdit.valor}
            onChange={e => handleFieldChange("valor", e.target.value)}
          />
          <TextInput
            name="aporte"
            id="aporte"
            label="aporte"
            value={simuladorEdit.aporte}
            onChange={e => handleFieldChange("aporte", e.target.aporte)}
          />
          <TextInput
            name="tipoInvest"
            id="tipoInvest"
            label="tipo investimento"
            value={simuladorEdit.tipoInvest}
            onChange={e => handleFieldChange("tipoInvest", e.target.tipoInvest)}
          />
          <TextInput
            name="juros"
            id="juros"
            label="juros"
            value={simuladorEdit.juros}
            onChange={e => handleFieldChange("juros", e.target.juros)}
          />
          <TextInput
            name="tempoInvest"
            id="meses"
            label="meses"
            value={simuladorEdit.tempoInvest}
            onChange={e => handleFieldChange("tempoInvest", e.target.tempoInvest)}
          />
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
          <p className="text-red-400">{error}</p>
      </form>
  )
}