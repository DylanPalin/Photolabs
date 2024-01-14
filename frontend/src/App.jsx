import React, { useState } from "react";
import HomeRoute from "./routes/HomeRoute";
import "./App.scss";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handlePhotoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} onPhotoClick={handlePhotoClick}/>
      {isModalOpen && <PhotoDetailsModal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;