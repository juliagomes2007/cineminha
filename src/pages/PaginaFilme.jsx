import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import { Link } from "react-router-dom";

function PaginaFilme() {
  const { id } = useParams();
  const [filme, setFilme] = useState(null);
  const [diretor, setDiretor] = useState('');
  const apiKey = 'api_key=d585b66222a73fca5fc14f7d1568b41f';
  const urlBase = 'https://api.themoviedb.org/3/movie/';
  const urlImg = 'https://image.tmdb.org/t/p/w1280';

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`);
        const movieData = await movieResponse.json();
        setFilme(movieData);

        const creditsResponse = await fetch(`${urlBase}${id}/credits?${apiKey}&language=pt-BR`);
        const creditsData = await creditsResponse.json();
        const diretorData = creditsData.crew.find(member => member.job === 'Director');
        setDiretor(diretorData ? diretorData.name : 'N/A');

      } catch (erro) {
        console.log(erro);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!filme) {
    return <div>Loading...</div>;
  }

  const formatarDataBrasileira = (data) => {
    const [year, month, day] = data.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    
    <div className="max-w-4xl mx-auto mt-9 mb-20 bg-mClaro rounded-lg shadow-md overflow-hidden flex">
        <div>
          <div className="w-1/1">
            <img src={`${urlImg}${filme.poster_path}`} alt={filme.title} className="w-full h-full object-cover" />
          </div>
            <div>
              <h1 className="text-4xl font-bold text-white text-center">{filme.title}</h1>
         
              <p className="text-black text-1xl mb-4"><strong>Nome:</strong> {filme.title}</p>
              <p className="text-black text-1xl mb-4"><strong>Data de Lançamento:</strong> {formatarDataBrasileira(filme.release_date)}</p>
              <p className="text-black text-1xl mb-4"><strong>Avaliação de 0 a 10:</strong> {filme.vote_average}</p>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <div>
                <p className="text-black text-1xl pl-10"><strong>Sinopse:</strong> {filme.overview}</p>
                <p className="text-black text-1xl pl-10"><strong>Diretor:</strong> {diretor}</p>
            </div>
        </div>
    </div>
  );
}

export default PaginaFilme;