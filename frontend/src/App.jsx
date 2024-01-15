import React, { useState, useEffect } from "react";
import HomeRoute from "./routes/HomeRoute";
import "./App.scss";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

const App = ({ isFav }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [topicPhotos, setTopicPhotos] = useState([null]);
  const [favoritePhotos, setFavoritePhotos] = useState([]);
  const [navbarFavs, setNavbarFavs] = useState(false);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleFav = (id) => {
    setFavoritePhotos((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        console.log("unfavorited");
        setNavbarFavs(false); // set navbarFavs to false when a photo is unfavorited
        return prevFavorites.filter((favId) => favId !== id);
      } else {
        console.log("favorited");
        setNavbarFavs(true); // set navbarFavs to true when a new photo is favorited
        return [...prevFavorites, id];
      }
    });
  };
  
  return (
    <div className="App">
      <HomeRoute
        isFav={isFav}
        toggleFav={toggleFav}
        topics={topics}
        photos={photos}
        onPhotoClick={handlePhotoClick}
        navbarFavs={navbarFavs}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          selectedPhoto={selectedPhoto}
          hideModal={handleCloseModal}
          topicPhotos={topicPhotos}
          isFav={isFav}
          toggleFav={toggleFav}
        />
      )}
    </div>
  );
};

export default App;
