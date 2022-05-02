import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupEditProfile from "./PopupEditProfile";
import PopupAddPlace from "./PopupAddPlace";
import PopupEditAvatar from "./PopupEditAvatar";
import PopupConfirm from "./PopupConfirm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isPopupEditProfileOpen, setIsPopupEditProfileOpen] = React.useState(false)
    const [isPopupAddPlaceOpen, setIsPopupAddPlaceOpen] = React.useState(false)
    const [isPopupAvatarOpen, setIsPopupAvatarOpen] = React.useState(false)
    const [isPopupConfirmOpen, setIsPopupConfirmOpen] = React.useState(false)
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false)
    const [selectedCard, setSelectedCard] = React.useState([])

    function handleEditProfileClick() {
        setIsPopupEditProfileOpen(true)
    }


    function handleAddPlaceClick() {
        setIsPopupAddPlaceOpen(true)
    }

    function handleEditAvatarClick() {
        setIsPopupAvatarOpen(true)
    }


    function handleCardDelete(card) {
        setIsPopupConfirmOpen(true)
    }

    function closeAllPopups() {
        setIsPopupEditProfileOpen(false)
        setIsPopupAddPlaceOpen(false)
        setIsPopupAvatarOpen(false)
        setIsPopupConfirmOpen(false)
        setIsImagePopupOpen(false)
        setSelectedCard([])
    }


    function handleOnCardClick(card) {
        setIsImagePopupOpen(true)
        setSelectedCard(card)
    }


    return (
        <div className="App page">
            <div className="root ">
                <Header/>
                <Main
                    EditProfile={handleEditProfileClick}
                    NewPost={handleAddPlaceClick}
                    AvatarEdit={handleEditAvatarClick}
                    onDelete={handleCardDelete}
                    onCardClick={handleOnCardClick}
                />

                <PopupEditProfile
                    CurrentUser=''
                    isOpen={isPopupEditProfileOpen}
                    name='-profile-edit'
                    onClose={closeAllPopups}
                    header='Редактировать профиль'
                    onSubmit={handleEditProfileClick}
                    button='Сохранить'
                />
                <PopupAddPlace
                    isOpen={isPopupAddPlaceOpen}
                    name='-new-post'
                    onClose={closeAllPopups}
                    header='Новое место'
                    button='Создать'
                />
                <PopupEditAvatar
                    isOpen={isPopupAvatarOpen}
                    name='-avatar-edit'
                    onClose={closeAllPopups}
                    header='Обновить аватар'
                    button='Сохранить'
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
                    name='-confirm'
                    header='Вы уверены?'
                    onSubmit={handleCardDelete}
                    button='Да'
                />
                <Footer/>
            </div>
        </div>
    );
}

export default App;
