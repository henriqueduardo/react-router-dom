import React from 'react'
import { useNavigate } from "react-router-dom";
import "./style.css"

const Login = () => {

    const navigate = useNavigate();

    // retornar o usuario ao inicio após fazer login
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("usuario logado")
        navigate('/mostruario')
    }

  return (
    <>
      <section className  ="text-gray-400 login-bg">
        <div className  ="container px-5 py-24 mx-auto flex flex-wrap items-center">
      <div className  ="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className ="title-font font-medium text-3xl text-black">Skepta x Nike Air Max <br/> Tailwind V Chrome Blue</h1>
        <p className  ="leading-relaxed text-black mt-4 text-shadow">Skepta deixou uma marca indelével na música em Londres e além com seu fluxo revolucionário e universo criativo expansivo - mas ele também teve um impacto profundo nos calçados ao aplicar sua estética a um punhado de designs icônicos do Air Max.</p>
      </div>
      <div className  ="lg:w-2/6 md:w-1/2 bg-zinc-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className ="text-white text-lg font-medium title-font mb-5">Iniciar sessão</h2>
        <div className  ="relative mb-4">
          <label className  ="leading-7 text-sm text-white">E-mail</label>
          <input type="email" required className ="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-teal-400 rounded border border-gray-600 focus:border-teal-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className  ="relative mb-4">
          <label className  ="leading-7 text-sm text-white">Senha</label>
          <input type="password" required className  ="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-teal-400 rounded border border-gray-600 focus:border-teal-300 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className ="text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-zinc-700 rounded text-lg" type='submit' onClick={handleSubmit}>Entrar</button>
      </div>
        </div>
      </section>
    </>
  )
}

export default Login;