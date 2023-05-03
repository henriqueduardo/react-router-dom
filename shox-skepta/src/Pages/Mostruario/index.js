import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import produtoImage from '../../img/skepta-tailwind-produto.jpeg';


function MostruarioProdutos() {

  const [products] = useState([
    {
      id: 1,
      name: 'Air Max Tailwind V Blue',
      image: 'https://media.gq-magazine.co.uk/photos/605cd284a01cc0d39931f909/master/w_4380,h_5842,c_limit/25032021_Skeppy_3.jpg'
    },
    {
      id: 2,
      name:  'Air Max Tailwind V Bloody',
      image: 'https://www.highsnobiety.com/static-assets/thumbor/1OP0pq9w8P_SdSQB1YJysEMU04Q=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2021/05/13165120/skepta-nike-air-max-tailwind-v-bloody-chrome-release-date-price-05.jpg'
    },
    {
      id: 3,
      name: 'Air Max 97',
      image: 'https://www.thedropdate.com/wp-content/uploads/2017/08/SKETPA-IG-crop.jpg'
    },
    {
      id: 4,
      name: 'Shox TL',
      image: 'https://static.nike.com/a/images/w_960,c_limit,f_auto/g6nfm5pya9wumuyohtyd/sk-shox-tl-skepta-release-date.jpg'
    },
]);

  return (
    <>
    <h1 className='container bg-white mx-auto px-4 py-8 text-4xl'>Modelos</h1>
    <section className="flex bg-white container mx-auto flex-wrap flex-col md:flex-row items-center">
      {products.map((product) => (  
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image}/>
      </a>
      <div className="mt-4">
        <h3 className="color-primary text-xs tracking-widest title-font mb-1">Nike x Skepta</h3>
        <h2 className="text-black title-font text-lg font-medium">{product.name}</h2>
        <button className='inline-flex items-center bg-zinc-900 border-0 py-2 px-4 focus:outline-none hover:bg-zinc-700 hover:text-white rounded text-white mt-4 md:mt-0 cursor-pointer'><Link to={`/modelo/${product.id}/${product.name}/detalhes`}>Detalhes</Link></button>
      </div>
      </div>
      ))}
    </section>

    <section className="text-black bg-white">
      <div className="container px-4 py-8 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-black lg:w-1/3 lg:mb-0 mb-4">Metamorfose. <br/> Air Max Tailwind 5.</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base"> Baseado no conceito do renascimento criativo, representado por uma borboleta e sua metamorfose, a abordagem de Skepta ao design aposta em uma estampa sublimada de asas de borboleta rodeada por costuras pretas estruturadas e reforçadas.</p>
        </div>
        <div className="flex flex-row-reverse flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/ghhirtavuhjxgwgs0735/skepta-phantom-sk-nike?fimg-ssr-default"/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://www.sneakers.fr/wp-content/uploads/2019/09/behind-the-design-sk-shox-tl-skepta-5-1160x653.jpg"/>
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://cdn.shopify.com/s/files/1/2031/6995/files/SK_SHOX_Sk_1_1920x1080px_Unbranded_No_Border_original_ca7aa6e6-bb92-423f-b100-5a4a94403aa1.jpg?v=1568199502"/>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://overstandard.dk/wp-content/uploads/2021/03/nike-sk-tailwind-v-official-images-and-release-info-3_hd_1600.jpg"/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://cdn.sanity.io/images/c1chvb1i/production/7d2634c3b384324b0a2157d9604cf08df81ee8e6-1100x735.jpg/nike-sk-tailwind-v-official-images-and-release-info-2_hd_160027.jpg"/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/85d5fe18-52be-4e67-9919-a0cae7d72e87/nike-x-skepta.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MostruarioProdutos;