import React from 'react'

const Detalhes = () => {
  return (
    <>
    <section class="text-black bg-white">
        <div class="container px-8 py-8 mx-auto">
            <div class="lg:w-4/5  flex flex-wrap">
                <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://www.ocarafashion.com/wp-content/uploads/2021/03/nike-sk-tailwind-v-skepta-brasil-05.jpeg"/>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-sm title-font text-zinc-700">COLLAB</h2>
                <h1 class="text-zinc-900 text-3xl font-medium mb-1">SKEPTA x NIKE</h1>
                <p class="leading-relaxed">“Todos nós estamos passando por uma metamorfose, uma nova etapa da vida”. “Escolhemos esta estampa de borboleta entre cerca de 50 opções diferentes porque ela tinha que evocar a emoção correta.”</p>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Detalhes;