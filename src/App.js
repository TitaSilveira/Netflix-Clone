import React, { useEffect, useState } from 'react';
import Api from './Api';
import MovieRow from './Components/MovieRow';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);

    useEffect(() => {
      const loadAall = async () => {
        //Pegando a lista total
        let list = await Api.getHomeList();
        setMovieList(list)
        console.log("teste list: ", list)
      }
      loadAall();
    }, [])

  return (
    <div className='page'>
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