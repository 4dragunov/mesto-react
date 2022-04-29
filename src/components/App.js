import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupEditProfile from "./PopupEditProfile";
import PopupAddPlace from "./PopupAddPlace";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupConfirm from "./PopupConfirm";

import {Api} from '../utils/api.js'
import ImagePopup from "./ImagePopup";


function App() {

    const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false)
    const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false)
    const [isPopupAvatarOpen, setIsPopupAvatarOpen] = React.useState(false)
    const [isPopupConfirmOpen, setIsPopupConfirmOpen] = React.useState(false)
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState([])
    const [userInfo, setCurrentUser] = React.useState({name: '', avatar: '', about: ''});
    const [cards, setCards] = React.useState([]);


    function handleEditProfileClick(name, about) {
        setIsPopupEditProfileOpen(true)
        console.log(name, about)

    }

    function handleAddPlaceClick() {
        setIsPopupAddPlaceOpen(true)
    }

    function handleEditAvatarClick() {
        setIsPopupAvatarOpen(true)
    }

    function handleConfirmClick() {
        setIsPopupConfirmOpen(true)

    }

    function handleCardDelete(card) {
        setIsPopupConfirmOpen(true)
        console.log(card)
    }

    function closeAllPopups() {
        setIsPopupEditProfileOpen(false)
        setIsPopupAddPlaceOpen(false)
        setIsPopupAvatarOpen(false)
        setIsPopupConfirmOpen(false)
        setIsImagePopupOpen(false)
    }


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

    function handleOnCardClick(card) {
        setIsImagePopupOpen(true)
        setSelectedCard(card)
    }

    function handleLikeCard(card) {
        Api.setLike(card._id)
            .then((likedCard) => {
                setCards(prevState => {
                    return prevState.map((card) => card._id === likedCard._id ? likedCard : card)
                })
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }

    function handleDelLikeCard(card) {
        Api.delLike(card._id)
            .then((likedCard) => {
                setCards(prevState => {
                    return prevState.map((card) => card._id === likedCard._id ? likedCard : card)
                })
            })
            .catch((err) => {
                console.log(`Ошибка: ${err}`);
            });
    }


    return (
        <div className="App page">
            <div className="root ">

                <Header/>
                <Main
                    EditProfile={handleEditProfileClick}
                    NewPost={handleAddPlaceClick}
                    AvatarEdit={handleEditAvatarClick}
                    CurrentUser={userInfo}
                    Cards={cards}
                    onDelete={handleCardDelete}
                    onCardClick={handleOnCardClick}
                    onLikeCard={handleLikeCard}
                    onDisLikeCard={handleDelLikeCard}

                />
                <PopupEditProfile
                    CurrentUser={userInfo}
                    isOpen={isPopupEditProfileOpen}
                    name={`-profile-edit`}
                    onClose={closeAllPopups}
                    header={'Редактировать профиль'}
                    onSubmit={handleEditProfileClick}
                    button={'Сохранить'}
                />
                <PopupAddPlace
                    isOpen={isPopupAddPlaceOpen}
                    name={`-new-post`}
                    onClose={closeAllPopups}
                    header={'Новое место'}
                    button={'Создать'}
                />
                <PopupEditAvatar
                    isOpen={isPopupAvatarOpen}
                    name={'-avatar-edit'}
                    onClose={closeAllPopups}
                    header={'Обновить аватар'}
                    button={'Сохранить'}
                />

                <PopupConfirm
                />
                <ImagePopup
                    isOpen={isImagePopupOpen}
                    onClose={closeAllPopups}
                    card={selectedCard}
                />
                <PopupConfirm
                    isOpen={isPopupConfirmOpen}
                    onClose={closeAllPopups}
                    name={'-confirm'}
                    header={'Вы уверены?'}
                    onSubmit={handleCardDelete}
                    button={'Да'}
                />


                <Footer/>

            </div>
        </div>


    );
}

export default App;
