// recebendo o ID e nome do produto
import { Outlet, useParams } from "react-router-dom";

function ProdutoDetalhes() {  
  const { id, name } = useParams();

  return (
    <>
      <h1 className="container px-8 py-4 mx-auto text-4xl bg-white">Modelo {id} </h1>
      <div>
        <h2 className='container bg-white color-primary mx-auto px-8 py-2 text-4xl'>{name}</h2>
      </div>
      <Outlet/>
    </>
  );

}

export default ProdutoDetalhes;