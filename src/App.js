import React, { useEffect, useState } from 'react';
import Api from './Api';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import Header from  './Components/Header';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  const[featuredData,setFeaturedData] = useState(null);
  const[blackHeader, setBlackHeader] = useState(false);

    useEffect(() => {
      const loadAll = async () => {
        //Pegando a lista total
        let list = await Api.getHomeList();
        console.log('lista aqui loadAll: ', list)
        setMovieList(list)

        //Pegando o Featured
        let originals = list.filter(i => i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1 ))
        let chosen = originals[0].items.results[randomChosen];
        console.log("CHOSEN:", chosen)
        let chosenInfo = await Api.getMovieInfo(chosen.id, 'tv')
        setFeaturedData(chosenInfo)
      }
      loadAll();

    }, [])
    
    // Monitorar o Scroll para alteração do Header
    useEffect(() => {
      const scrollListener = () => {

        if(window.scrollY > 10 ){
          setBlackHeader(true)
        } else {
          setBlackHeader(false)
        }
      }
      window.addEventListener('scroll', scrollListener)

      // Executará o código abaixo quando o componente for desmontado
      return () => {
        window.removeEventListener('scroll', scrollListener)
      }
    }, [])

  return (
    <div className='page'>
      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }


      <section className='lists'>
        {movieList
        .map((item, index)=> {
          return(
            <div key={index}>
              <MovieRow title={item.title} items={item.items} />
            </div>
          )
        })}
      </section>

      <footer>
         Feito com <span role="img" aria-label="coração">❤️</span> por Cintia Silveira. <br />
         Baseado no curso B7web. <br />
         Direitos de imagem para Netflix. <br />
         Dados extraídos do site themoviedb.org.
      </footer>
      
    </div>

  );
}

export default App;