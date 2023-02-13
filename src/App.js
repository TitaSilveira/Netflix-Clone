import React, { useEffect, useState } from 'react';
import Api from './Api';
import MovieRow from './Components/MovieRow';
import FeaturedMovie from './Components/FeaturedMovie';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  const[featuredData,setFeatureData] = useState(null);

    useEffect(() => {
      const loadAall = async () => {
        //Pegando a lista total
        let list = await Api.getHomeList();
        console.log('lista aqui: ', list)
        setMovieList(list)

        //Pegando o Featured
        let originals = list.filter(i => i.slug === 'originals');
        let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1 ))
        let chosen = originals[0].items.results[randomChosen];
        let chosenInfo = await Api.getMovieInfo(chosen.id, 'tv')
        setFeatureData(chosenInfo)
      }
      loadAall();
      
    }, [])

  return (
    <div className='page'>
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className='lists'>
        {movieList.map((item, index)=> {
          return(
            <div key={index}>
              <MovieRow title={item.title} items={item.items}/>
            </div>
          )
        })}
      </section>
      
    </div>

  );
}

export default App;