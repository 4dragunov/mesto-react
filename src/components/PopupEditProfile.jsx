import React from 'react';
import PopupWithForm from './PopupWithForm'

const PopupEditProfile = (props) => {
    const [name, setName] = React.useState('');
    const [about, setAbout] = React.useState('')

    const handleSetName = (evt) => {
        setName(evt.target.value)
        props.CurrentUser.name = evt.target.value

    }
    const handleSetAbout = (evt) => {
        setAbout(evt.target.value)
        props.CurrentUser.about = evt.target.value
    }

    const handleOnSubmit = (evt) => {
        evt.preventDefault();
        props.onSubmit(name, about)
    }


    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name={props.name}
            onClose={props.onClose}
            header={props.header}
            onSubmit={handleOnSubmit}
            button = {props.button}
        >
            <input type="text" className="popup__input popup__input_name" name="name" placeholder="Имя"
                   id="name-input"
                   minLength="2" maxLength="40"
                   value={props.CurrentUser.name}
                   onChange={handleSetName} required/>
            <span className="popup__form-input-error name-input-error"/>
            <input type="text" className="popup__input popup__input_description" name="description"
                   id="description-input"
                   placeholder="Работа" minLength="2" maxLength="200"
                   value={props.CurrentUser.about}
                   onChange={handleSetAbout}
                   required/>
            <span className="popup__form-input-error description-input-error"/>
        </PopupWithForm>
    );
};

export default PopupEditProfile;