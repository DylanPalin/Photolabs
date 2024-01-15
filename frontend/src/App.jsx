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
  const [favoritePhotos, setFavoritePhotos] = useState([null]);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleFav = (id) => {
    if (favoritePhotos.includes(id)) {
    console.log("favs exist");
    } else {
      console.log("no favs");
    }
    setFavoritePhotos((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((favId) => favId !== id);
      } else {
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
