// erro 404 caso não seja uma URL valida
import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

const NotFound = () => {
  return (
    <>
<section>
    <div className="container flex items-center px-6 py-12 mx-auto not-found">
        <div>
            <p className="text-sm font-medium color-primary">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-zinc-900 md:text-3xl">Página não encontrada.</h1>
            <p className="mt-4 text-zinc-800">Essa página não existe.</p>

            <div className="flex items-center mt-6 gap-x-3">
                <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white duration-200 bg-primary rounded-lg shrink-0 sm:w-auto hover:bg-zinc-800">
                  <Link to='/'>Voltar ao início</Link>
                </button>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default NotFound;