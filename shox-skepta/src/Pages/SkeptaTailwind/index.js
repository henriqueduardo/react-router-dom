import React from 'react';
import TailwindImage from '../../img/skepta-tailwind.jpeg';

const SkeptaTailwind = () => {
  return (
    <>
          <section class="text-zinc-800 bg-white body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">SK SHOX x "Skepta"
      </h1>
      <p class="mb-8">Em 2018, Skepta recebeu o título de líder de um clã na terra natal dos seus pais em Ogun, Nigéria. Na sequência desta experiência, passou a fazer parte dos seus objetivos mostrar aos outros que também se podem sentir importantes. Ao trabalhar arduamente, os seus esforços são reconhecidos, apreciados e celebrados, assim sendo que os seus sonhos estarão sempre ao seu alcance.</p>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src={TailwindImage}/>
    </div>
  </div>
</section>
    </>
  )
}

export default SkeptaTailwind;