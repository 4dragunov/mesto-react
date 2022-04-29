import React from 'react';


const ImagePopup = (props) => {

    function handleOverlayClick(evt) {
        if (evt.target === evt.currentTarget) {
            props.onClose()
        }

    }

    return (
        <div className={`popup popup_type-image ${props.isOpen && 'popup_enabled'}`} onClick={props.onClose}>
            <div className="popup__container popup__container_type-image" onClick={handleOverlayClick}>
                <button type="button" className="popup__close-button popup__close-button_type-image"
                        onClick={props.onClose}/>
                <img className="popup__image" src={props.card.link} alt="Описание изображения"/>
                <p className="popup__image-description">{props.card.name}</p>
            </div>
        </div>
    );
};

export default ImagePopup;