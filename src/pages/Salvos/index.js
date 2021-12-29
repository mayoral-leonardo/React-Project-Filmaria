import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './salvos.css';
import { toast } from 'react-toastify';

export default function Salvos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem('filmes');
    setFilmes(JSON.parse(minhaLista) || []);
  }, [])

  function handleDelete (id) {
    let filtroFilmes = filmes.filter((item)=>{
      return (item.id !== id);
    })
    
    setFilmes(filtroFilmes);
    localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
    toast.success('Filme excluído com sucesso !')
  }

  return (
    <div className='meus-filmes'>
      <h1>Meus Filmes</h1>

      {filmes.length === 0 && (<span>Você ainda não salvou nenhum filme :( </span>)}
      <ul>
        {filmes.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.nome}</span>
              <div>
                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>
                <button onClick={() => handleDelete(item.id)}>Excluir</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}