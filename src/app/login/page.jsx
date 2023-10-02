"use client"

import Image from 'next/image'
import loginImage from '@/images/login1.jpg'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import { useForm } from "react-hook-form"
import { useContext } from 'react'
import { AuthContext } from '@/context/AutoContext'


export default function Login(){
  const { register, handleSubmit } = useForm()
  const { login } = useContext(AuthContext)

  const onSubmit = (data) => {
    login(data)
  }
  return(
    <div className='flex h-screen'>
      <aside className='hidden lg:flex'>
        <Image src={loginImage}
          alt="homem sentado em cima de moedas com notebook no colo e com moedas ao redor"
          className='h-full w-full object-cover'/>
      </aside>
      <main className='flex flex-col items-center justify-center h-screen w-full'>
        <h1 className='text-5xl font-bold'>Profit</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput register={register} name="email" label="e-mail" />
          <TextInput register={register} name="senha" label="senha" type="password" />
          <Button element="button">entrar</Button>
        </form>
      </main>
    </div>
  )
}