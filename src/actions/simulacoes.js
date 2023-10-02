"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/simuladores"

export async function create(formData){
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
  return {ok:"Simulador cadastrada com sucesso"}
}

export async function getSimuladores(){
  const token = cookies().get("profit_token")
  const options = {
    headers: {
      "Authorization": `Bearer ${token.value}`
    }
  }
  const response = await fetch(url,options)

  if (response.status !== 200) throw new Error("Não foi possível carregar os dados")

  return await response.json()
}

export async function destroy(id){
  const deleteUrl = url + "/" + id
  // const deleteUrl = `${url}/${id}`

  const options = {
    method: "DELETE"
  }

  const response = await fetch(deleteUrl, options)

  if(!response.ok){
    const json = (await response).json()
    return {error: "Falha ao apagar a simulacao. Verifique se existem simulações"}
  }

  revalidatePath("/simulacoes")
}

export async function getSimulador(id){
  const getUrl = url + "/" + id
  const response = await fetch(getUrl)
  const json = await response.json()

  if(!response.ok){
    return {error: "Falha ao carregar simulador. " + json.message}
  }

  return json
}

export async function update(simulador){
  const updateUrl = url + "/" + simulador.id

  const options = {
    method: "PUT",
    body: JSON.stringify(simulador),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const response = await fetch(url, options)
  if (!response.ok){
    const json = await response.json()
    return {error: "Erro ao editar" + mensagens}
  }

  revalidatePath("/simulacoes")
  return {ok:"Simulador alterado com sucesso"}
}