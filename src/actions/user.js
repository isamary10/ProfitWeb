"use server"

import { cookies } from 'next/headers'

export async function apiLogin(credenciais){
  //requisição para API
  const options = {
    method: "POST",
    body: JSON.stringify(credenciais),
    headers: {
      "Content-Type": "application/json"
    }
  }

  const resp = await fetch(url, options)

  if (resp.status !== 200) return {error: "usuário ou senha inválidas"}

  const json = await resp.json()

  //gravar o token nos cookies
  cookies().set("profit_token", json.token, {
    maxAge: 60 * 60 * 24 * 2 // 2 dias
  })
}

export async function apiLogout(data) {
  cookies().delete("profit_token")
}