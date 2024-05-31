import data from '../../artigos.json'
function Home() {
    return (  
        <>
            <input type="text" id="buscar" placeholder="Busque seu filme"></input>
            <div className='columns-3 content-evenly'>
                {data.map(filme => (
                    <div className="card" key={filme.title}>
                        <div className="rounded overflow-hidden shadow-lg">
                            <img className="w-50%" src={filme.image} alt={filme.title}></img>
                            <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{filme.title}</div>
                                <div className='text'>
                                    {filme.text.map(text => (
                                        <p key={text} className='text-gray-700 text-base'>{text}</p>
                                    ))}
                                </div>
                            </div>
                            <div className='tag'>
                                <div className="px-6 pt-4 pb-2">
                                    {filme.tags.map(tag => (
                                        <span key={tag} className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{tag}</span>
                                    ))}
                                    </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
            
        </>
    );
}

export default Home;