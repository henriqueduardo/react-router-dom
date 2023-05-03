import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
        <header className="text-gray-400 bg-neutral-900">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                <span className="ml-3 text-xl">SK SHOX</span>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <Link to='/' className="mr-5 hover:text-white">Início</Link>
                <Link to='/mostruario' className="mr-5 hover:text-white">Mostruário</Link>
                </nav>
                <Link to='/login' className="inline-flex items-center bg-primary border-0 py-2 px-4 focus:outline-none hover:bg-white hover:text-black rounded text-white mt-4 md:mt-0 cursor-pointer">Login</Link>
            </div>
        </header>
    </>

  )
}

export default Header;