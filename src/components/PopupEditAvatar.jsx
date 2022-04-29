import React from 'react';
import PopupWithForm from "./PopupWithForm";

const PopupEditAvatar = (props) => {
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name={props.name}
            onClose={props.onClose}
            header={props.header}
            button={props.button}
        >

            <input type="url" pattern="https?://.+" className="popup__input popup__input_name"
                   name="link"
                   placeholder="Ссылка на картинку" id="place-link-input" required/>
            <span className="popup__form-input-error place-link-input-error"/>

        </PopupWithForm>
    );
};

export default PopupEditAvatar;