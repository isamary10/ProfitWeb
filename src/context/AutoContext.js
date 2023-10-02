"use client"

import { apiLogin, apiLogout } from "@/actions/user";
import { useRouter } from "next/navigation";

const { createContext, useState } = require("react");

export const AuthContext = createContext({})

export function AuthProvider({children}){

  const [user, setUser] = useState(null)
  const { push } = useRouter()

  const login = async (credenciais) => {

    await apiLogin(credenciais)
    setUser({
      nome: "Luiza",
      email: "luiza@email.com"
    })
    push("/")
  }

  const logout = () => {
    apiLogout()
    setUser(null)
    push("/login")
  }

  return(
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}