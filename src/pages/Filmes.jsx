import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const formatarDataBrasileira = (dataIso) => {
    const [ano, mes, dia] = dataIso.split('-');
    return `${dia}/${mes}/${ano}`;
}

function Filmes() {
    const [filmes, setFilmes] = useState([])
    const apiKey='api_key=d585b66222a73fca5fc14f7d1568b41f'
    const urlBase='https://api.themoviedb.org/3/movie/'
    const urlImg='https://image.tmdb.org/t/p/w342'

    useEffect(() => {

        fetch(`${urlBase}popular?${apiKey}`)
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(erro => console.log(erro))

    },[])
    

    return ( 
        <>
        <div className="listaFilmes grid grid-cols-3 gap-3 pr-7 pl-7 pb-7">
            {
                filmes.map(filme => (
                    <div className="card-filme flex flex-col justify-center items-center" key={filme.id}>
                        <Link className="bg-blue-500" to={`${filme.id}`}><img src={`${urlImg}${filme.poster_path}`}/></Link>
                        <h1 className="pt-2">{filme.title}</h1>
                        <h1>{formatarDataBrasileira(filme.release_date)}</h1>         
                    </div>
                ))
            }
        </div>
        
        </>
     );
}

export default Filmes;