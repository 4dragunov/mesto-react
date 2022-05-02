import React from 'react';

function PopupWithForm(props) {

    function handleOverlayClick(evt) {
        if (evt.target === evt.currentTarget) {
            props.onClose()
        }
    }

    return (
        <div className={`popup popup_type${props.name} ${props.isOpen && 'popup_enabled'}`}
             onClick={handleOverlayClick}>
            <div className={`popup__container popup__container_type${props.name}`}>
                <h3 className="popup__title">{props.header}</h3>
                <button className={`popup__close-button popup__close-button_type${props.name} type="button"`}
                        onClick={props.onClose}/>
                <form className="popup__form" name="edit" id={props.name}>
                    {props.children}
                    <button type="submit" className="popup__save-button"
                            onSubmit={props.onSubmit}>{props.button}</button>
                </form>
            </div>
        </div>
    );
};

export default PopupWithForm;

