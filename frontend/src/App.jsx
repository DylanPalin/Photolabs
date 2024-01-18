import React from "react";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import { useApplicationData } from './hooks/useApplicationData';
import "./App.scss";

const App = () => {
  const {
    state: { dark, likes, modal, photoData, selectedPhoto, topicData },
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getTopicPhotos,
    getAllPhotos,
    setDark,
    handleSearchRequest,
  } = useApplicationData();

  // returns boolean to determine if heart is filled in or not
  const isFav = photoId => {
    return likes.includes(photoId);
  };
  // returns boolean to determine if notification is displayed or not
  const ifFavPhotoExist = likes.length > 0;

  return (
    <div className={`App ${dark ? 'dark' : ''}`}>
      <HomeRoute
        isFav={isFav}
        toggleFav={updateToFavPhotoIds}
        ifFavPhotoExist={ifFavPhotoExist}
        photos={photoData}
        topics={topicData}
        getTopicPhotos={getTopicPhotos}
        getAllPhotos={getAllPhotos}
        showModal={setPhotoSelected}
        dark={dark}
        setDark={setDark}
        searchReq={handleSearchRequest}
      />
      {modal && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          hideModal={onClosePhotoDetailsModal}
          showModal={setPhotoSelected}
          isFav={isFav}
          toggleFav={updateToFavPhotoIds}
          dark={dark}
        />
      )}
    </div>
  );
};

export default App;
