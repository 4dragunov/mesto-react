import React from 'react';
import Card from './Card'

function Main(props) {


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__content-wrap">
                    <img src={props.CurrentUser.avatar} className="profile__avatar" alt="Аватарка"/>
                    <button className="profile__avatar-edit" onClick={props.AvatarEdit}/>
                    <div className="profile__info">
                        <div className="profile__info-wrap">
                            <h1 className="profile__name">{props.CurrentUser.name}</h1>
                            <button type="button" className="profile__edit-button" onClick={props.EditProfile}/>
                        </div>
                        <p className="profile__description">{props.CurrentUser.description}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.NewPost}/>
            </section>

            <section className="elements">
                {props.Cards.map((card, i) => (
                    <Card card={card} onDelete={props.onDelete} onCardClick={props.onCardClick} currentUser={props.CurrentUser} onLikeCard ={props.onLikeCard} onDisLikeCard={props.onDisLikeCard}/>))}
            </section>


        </main>
    );
};

export default Main;