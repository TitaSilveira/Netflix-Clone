import React from "react";

export default ({selectedItem, setIsModalVisible}) => {
    return(
        <div className="modal">
            <div className="modal-content">
                <h2>{selectedItem.original_title}</h2>
                <p>{selectedItem.overview}</p>
                <button onClick={() => setIsModalVisible(false)}>Fechar</button>
            </div>
        </div>
    )
}