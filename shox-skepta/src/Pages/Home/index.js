// página inicial
import React from 'react';
import { Link } from "react-router-dom";
import imageShox3 from '../../img/shox-tailwind-1.webp';
import "./style.css"

const Home = () => {
  return (
    <>
<section className="text-gray-600 bg-white">
  <div className="container mx-auto flex px-4 py-8 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className='object-cover object-center rounded' src={imageShox3}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">NIKE x SKEPTA
      </h1>
      <p className="mb-8 leading-relaxed">Skepta, MC de grime londrino, está de volta à ação com a sua mais recente colaboração com a Nike. SK SHOX são tênis que simbolizam a concretização dos sonhos de Skepta e a forma de encontrar convicção em infindáveis oportunidades.</p>
      <div className="flex justify-center">
      <Link to='/skepta-shox' className="inline-flex text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded text-lg">Ver mais</Link>
        <Link to='/mostruario' className="ml-4 inline-flex text-white bg-neutral-600 border-0 py-2 px-6 focus:outline-none hover:bg-neutral-700 rounded text-lg">Todos</Link>
      </div>
    </div>
  </div>
</section>

<section className="text-gray-400 bg-white">
  <div className="container px-4 py-8 mx-auto skepta-text">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium mb-2 text-zinc-900">SKEPTA</h1>
        <div className="h-1 w-20 bg-primary rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-800 text-opacity-90">Lançado em setembro de 2019 em colaboração com o popular artista de grime do Reino Unido, o Skepta x Shox TL apresenta um acabamento preto monocromático na parte superior, construído em náilon com uma gaiola de TPU tonal para estrutura adicional. Os detalhes incluem um Swoosh prata metálico, lingueta de malha e ferramentas diferenciadas por uma série de pilares Nike Shox, todos revestidos em um tom vermelho vibrante.</p>
    </div>
  </div>
</section>

<section class="text-gray-400 bg-white">
  <div class="container px-4 py-8 mx-auto">
    <div class="flex flex-wrap -mx-4 -mb-10 text-center">
      <div class="sm:w-1/4 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-contain object-center h-full w-full" src="https://i2.wp.com/blackpipe.com.br/wp-content/uploads/2021/03/skepta-nike-air-max-tailwind-v-bright-blue-release-date-9.jpg?fit=1140%2C1425&ssl=1"/>
        </div>
        <h2 class="text-2xl font-medium color-primary mt-6 mb-3">Track Jacket</h2>
        <p class="leading-relaxed text-zinc-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
      </div>
      <div class="sm:w-1/4 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-contain object-center h-full w-full" src="https://i0.wp.com/blackpipe.com.br/wp-content/uploads/2021/03/skepta-nike-air-max-tailwind-v-bright-blue-release-date-8.jpg?fit=1140%2C1425&ssl=1"/>
        </div>
        <h2 class="title-font text-2xl font-medium color-primary mt-6 mb-3">Track Pants</h2>
        <p class="leading-relaxed text-zinc-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
      </div>
      <div class="sm:w-1/4 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-contain object-center h-full w-full" src="https://sneakerbardetroit.com/wp-content/uploads/2021/03/Skepta-Nike-Air-Max-Tailwind-V-5-Bright-Blue-Release-Date-2.jpg"/>
        </div>
        <h2 class="text-2xl font-medium color-primary mt-6 mb-3">Tailwind V Blue Chrome</h2>
        <p class="leading-relaxed text-zinc-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
      </div>
      <div class="sm:w-1/4 mb-10 px-4">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://media.endclothing.com/end-features/f_auto,q_auto:eco,w_1520/prodfeatures/4863417c-b3bc-404b-ae17-7e5985d8c7ff_25-03-21_NikexSkepta_DesktopSlideshow_1600x900.jpg?auto=compress,format"/>
        </div>
        <h2 class="text-2xl font-medium color-primary mt-6 mb-3">Tailwind Tracksuit</h2>
        <p class="leading-relaxed text-zinc-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
      </div>
    </div>
    
  </div>
</section>
    </>
  )
}

export default Home;