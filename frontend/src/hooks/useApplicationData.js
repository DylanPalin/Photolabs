import { useState } from 'react';

export default function useApplicationData() {
  const [state, setState] = useState({
    isModalOpen: false,
    selectedPhoto: null,
    topicPhotos: [null],
    favoritePhotos: [],
    navbarFavs: false
  });

  const updateToFavPhotoIds = (id) => {
    setState(prevState => ({
      ...prevState,
      favoritePhotos: prevState.favoritePhotos.includes(id) 
        ? prevState.favoritePhotos.filter((favId) => favId !== id)
        : [...prevState.favoritePhotos, id]
    }));
  };

  const setPhotoSelected = (photo) => {
    setState(prevState => ({
      ...prevState,
      selectedPhoto: photo,
      isModalOpen: true
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState(prevState => ({
      ...prevState,
      isModalOpen: false
    }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal
  };
}
