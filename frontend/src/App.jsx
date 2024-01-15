import React, { useState, useEffect } from "react";
import HomeRoute from "./routes/HomeRoute";
import "./App.scss";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [topicPhotos, setTopicPhotos] = useState([]);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (selectedPhoto) {
      const newTopicPhotos = photos.filter(photo => photo.topic === selectedPhoto.topic);
      setTopicPhotos(newTopicPhotos);
    }
  }, [selectedPhoto]);

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} onPhotoClick={handlePhotoClick}/>
      {isModalOpen && <PhotoDetailsModal selectedPhoto={selectedPhoto} onClose={handleCloseModal} topicPhotos={topicPhotos} />}
    </div>
  );
};

export default App;