import React from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import { useApplicationData } from './hooks/useApplicationData';
import "./App.scss";

const App = () => {
  const {
    state: { likes, modal, selectedPhoto, photoData, topicData, dark },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getTopicPhotos,
    getAllPhotos,
    setDark
  } = useApplicationData();

  // returns boolean to determine if heart is filled in or not
  const isLiked = photoId => likes.includes(photoId);
  // returns boolean to determine if notification is displayed or not
  const ifFavPhotosExist = likes.length > 0;

    return (
      <div className="App">
        <HomeRoute
          isLiked={isLiked}
          toggleFav={updateToFavPhotoIds}
          ifFavPhotosExist={ifFavPhotosExist}
          photos={photoData}
          topics={topicData}
          getTopicPhotos={getTopicPhotos}
          getAllPhotos={getAllPhotos}
          showModal={setPhotoSelected}
          dark={dark}
          setDark={setDark}
        />
        {modal && (
          <PhotoDetailsModal
            selectedPhoto={selectedPhoto}
            hideModal={onClosePhotoDetailsModal}
            showModal={setPhotoSelected}
            isLiked={isLiked}
            toggleFav={updateToFavPhotoIds}
            darkMode={setDarkMode}
          />
        )}
      </div>
    );
  };

  export default App;