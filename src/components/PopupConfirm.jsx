import React from 'react';
import PopupWithForm from './PopupWithForm'

const PopupConfirm = (props) => {

    const handleOnSumbit = () => {
        props.onSubmit(props.card)
    }

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            name={props.name}
            onClose={props.onClose}
            header={props.header}
            onSubmit={handleOnSumbit}
            button = {props.button}
        >

        </PopupWithForm>
    );
};

export default PopupConfirm;

