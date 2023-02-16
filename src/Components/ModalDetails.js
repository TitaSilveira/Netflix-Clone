import React from "react";
import './ModalDetails.css';

export default ({onClose, Item}) => {
    return(
        <div className="modal" onClick={onClose}>
            <div className="modal-content" style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${Item.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <div className="modal-horizontal">
                    <h2>{Item.original_title}</h2>
                    <p>{Item.overview}</p>
                    <button className="close-btn" onClick={onClose}>Fechar</button>
                </div>
            </div>
        </div>
    )
}