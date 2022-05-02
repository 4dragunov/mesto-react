import React from 'react';
import Card from './Card'
import {Api} from "../utils/api";

function Main(props) {

    const [cards, setCards] = React.useState([]);
    const [userInfo, setCurrentUser] = React.useState({name: '', avatar: '', about: ''});

    React.useEffect(() => {
            Promise.all([Api.getInitialCards(), Api.getUserInfo()])
                .then(([initialCards, userData]) => {
                    setCurrentUser(userData);
                    setCards(initialCards);
                })
                .catch((err) => {
                    console.log(`Ошибка: ${err}`);
                });
        }, []
    )

    function handleEditProfile() {
        props.EditProfile(userInfo)
    }


    return (
        <main className="content">
            <section className="profile">
                <div className="profile__content-wrap">
                    <img src={userInfo.avatar} className="profile__avatar" alt="Аватарка"/>
                    <button className="profile__avatar-edit" onClick={props.AvatarEdit}/>
                    <div className="profile__info">
                        <div className="profile__info-wrap">
                            <h1 className="profile__name">{userInfo.name}</h1>
                            <button type="button" className="profile__edit-button" onClick={handleEditProfile}/>
                        </div>
                        <p className="profile__description">{userInfo.description}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.NewPost}/>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card key={card.id} card={card} onDelete={props.onDelete} onCardClick={props.onCardClick}
                          currentUser={userInfo} onLikeCard={props.onLikeCard} onDisLikeCard={props.onDisLikeCard}/>))}
            </section>
        </main>
    );
};

export default Main;