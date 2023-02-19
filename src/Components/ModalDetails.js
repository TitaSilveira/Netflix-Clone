import React from "react";
import './ModalDetails.css';
import { CgClose } from 'react-icons/cg';



export default ({onClose, Item}) => {
    console.log(Item)


    let firstDate = new Date(Item.first_air_date);
    let genres = [];
    for(let i in Item.genres){
        genres.push(Item.genres[i].name)
    }

    console.log('Item.genres:', Item.genres);
    console.log('Item.first_air_date:', Item.first_air_date);
    console.log('Item.original_name:', Item.original_name);
    console.log('Item.number_of_seasons:', Item.number_of_seasons);
    return(
        <div className="modal" onClick={onClose}>
            <div className="modal-content" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${Item.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <button className="close-btn" onClick={onClose}><CgClose style={{fontSize: '50px'}}/></button>
                <div className="modal-horizontal">
                    {/* {Item.original_name }
                    {Item.vote_average }
                    {firstDate.getFullYear() }
                    {Item.number_of_seasons } */}
                    <div className="featured-name">{Item.original_name}</div>
                    <div className="featured-info">
                        <div className="featured-points">{Item.vote_average} pontos</div>
                        <div className="featured-year">{firstDate.getFullYear()}</div>
                        <div className="featured-seasons">{Item.number_of_seasons} temporada{Item.number_of_seasons !== 1? 's' : ''}</div>
                    </div>
                    <div className="featured-genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                    <div className="featured-description">{Item.overview}</div>
                    <div className="featured-buttons">
                        <button className="close-btn-content" onClick={onClose}>FECHAR</button>
                    </div>
                </div>
            </div>
        </div>
    )
}