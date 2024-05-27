import data from '../../artigos.json'
function Home() {
    return (  
        <>
            <input type="text" id="buscar" placeholder="Busque seu filme"></input>
            {data.map(filme => (
                <div className="card" key={filme.title}>
                <h1>{filme.title}</h1>
                <img src={filme.image} alt={filme.title}></img>
                <div className='tag'>
                    {filme.tags.map(tag => (
                        <span key={tag} className='text-purple-900'>{tag}</span>
                    ))}
                </div>
                <div className='text'>
                    {filme.text.map(text => (
                        <span key={text} className='text-green-500'>{text}</span>
                    ))}
                </div>
                </div>
            ))
            }
        </>
    );
}

export default Home;