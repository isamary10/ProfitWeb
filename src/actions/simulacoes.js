"use server"

import { revalidatePath } from "next/cache"

export async function create(formData){
  const url = "https://profit-production-a4ce.up.railway.app/api/simuladores"

  const options = {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const resp = await fetch(url, options)
  if (resp.status !== 201){
    const json = await resp.json()
    const mensagens = json.reduce((str, erro) => str += ". " + erro.message, "")
    return {error: "Erro ao cadastrar" + mensagens}
  }

  revalidatePath("/simulacoes")
  return {ok:"Conta cadastrada com sucesso"}
}