import React from "react";
import HomeRoute from "./routes/HomeRoute";
import "./App.scss";
import useApplicationData from './hooks/useApplicationData';
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

const App = ({ isFav }) => {
  const {
    state: { isModalOpen, selectedPhoto, topicPhotos, darkMode, favoritePhotos, navbarFavs },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getTopicPhotos,
    getAllPhotos,
    setDarkMode
  } = useApplicationData();


    // returns boolean to determine if heart is filled in or not
    const isLiked = photoId => favoritePhotos.includes(photoId);
    // returns boolean to determine if notification is displayed or not
    const isFavPhotoExist = favoritePhotos.length > 0;

  return (
    <div className="App">
      <HomeRoute
        isFav={isFav}
        toggleFav={updateToFavPhotoIds}
        onPhotoClick={setPhotoSelected}
        navbarFavs={navbarFavs}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          favoritePhotos={favoritePhotos}
          selectedPhoto={selectedPhoto}
          hideModal={onClosePhotoDetailsModal}
          isFav={isFav}
          toggleFav={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
