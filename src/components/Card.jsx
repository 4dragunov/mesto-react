import React from 'react';

const Card = (props) => {


    const isLiked = props.card.likes.some(like => like._id === props.currentUser._id)

    function handleDeleteCard() {
        props.onDelete(props.card._id)
    }

    function handleCardClick() {
        props.onCardClick(props.card);
    }

    function handleLikeCard() {
        props.onLikeCard(props.card);
    }


    function handleDisLikeCard() {
        props.onDisLikeCard(props.card);
    }

    return (
        <div className="element">
            <button className="element__trash-button" type="button" onClick={handleDeleteCard}/>
            <img src={props.card.link} className="element__image" alt="Изображение" onClick={handleCardClick}/>
            <div className="element__wrap">
                <h2 className="element__name">{props.card.name}</h2>
                <div className="element__like-container">
                    {isLiked
                        ? <button type="button" className={`element__like-button element__like-button_enabled`}
                                  onClick={handleDisLikeCard}/>
                        : <button type="button" className={`element__like-button`} onClick={handleLikeCard}/>


                    }

                    <p className="element__like-counter">{props.card.likes.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;