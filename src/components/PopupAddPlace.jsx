import React from 'react';
import PopupWithForm from './PopupWithForm'

const PopupAddPlace = (props) => {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name={props.name}
            onClose={props.onClose}
            header={props.header}
            button={props.button}
        >

            <input type="text" className="popup__input popup__input_name" name="name"
                   placeholder="Название"
                   id="place-name-input" minLength="2" maxLength="30" required/>
            <span className="popup__form-input-error place-name-input-error"/>
            <input type="url" pattern="https?://.+"
                   className="popup__input popup__input_description" name="link"
                   placeholder="Ссылка на картинку" id="place-description-input" required/>
            <span className="popup__form-input-error place-description-input-error"/>

        </PopupWithForm>

    )
        ;
};

export default PopupAddPlace;