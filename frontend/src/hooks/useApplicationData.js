import { useReducer, useEffect } from "react";

const initialState = {
  likes: [],
  selectedPhoto: null,
  selectedTopic: null,
  modal: false,
  photoData: [],
  topicData: [],
  dark: "",
};

const ACTIONS = {
  TOGGLE_LIKE: "TOGGLE_LIKE",
  SELECT_PHOTO: "SELECT_PHOTO",
  SELECT_TOPIC: "SELECT_TOPIC",
  CLOSE_PHOTO: "CLOSE_PHOTO",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  TOGGLE_DARK_MODE: "TOGGLE_DARK_MODE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_LIKE:
      const photoId = action.payload;
      if (state.likes.includes(photoId)) {
        return { ...state, likes: state.likes.filter((id) => id !== photoId) };
      }
      return { ...state, likes: [...state.likes, photoId] };
    // On photo click, the photo id is added to likes array in state.

    case ACTIONS.SELECT_PHOTO:
      return { ...state, modal: true, selectedPhoto: action.payload };
    // On photo click, the photo object is added to selectedPhoto in state.

    case ACTIONS.SELECT_TOPIC:
      return { ...state, selectedTopic: action.payload };
    // On topic click, the topic id is added to selectedTopic in state.

    case ACTIONS.CLOSE_PHOTO:
      return { ...state, modal: false, selectedPhoto: null };
    // On close button, the modal is set to false and selectedPhoto is set to null.

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    // On photo click, the photo data is set for display in modal.

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    // On topic click, the topic data is set to topics that belong to that topic.

    case ACTIONS.TOGGLE_DARK_MODE:
      if (state.dark === "dark") {
        return { ...state, dark: "" };
      }
      return { ...state, dark: "dark" };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateToFavPhotoIds = (photoId) =>
    dispatch({ type: ACTIONS.TOGGLE_LIKE, payload: photoId });

  const setPhotoSelected = (photo) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
  };

  const getTopicPhotos = (topicId) =>
    dispatch({ type: ACTIONS.SELECT_TOPIC, payload: topicId });

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_PHOTO });
  };

  const setDark = () => dispatch({ type: ACTIONS.TOGGLE_DARK_MODE });
  // Dark mode toggle

  const getAllPhotos = () => {
    fetch(`/api/photos`)
      .then((res) => res.json())
      .then((photoData) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData })
      );
  };

  useEffect(() => {
    getAllPhotos();
  }, []);

  useEffect(() => {
    fetch(`/api/topics`)
      .then((res) => res.json())
      .then((topicData) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData })
      );
  }, []);

  useEffect(() => {
    if (state.selectedTopic) {
      fetch(`/api/topics/photos/${state.selectedTopic}`)
        .then((res) => res.json())
        .then((photosByTopic) =>
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photosByTopic })
        );
    }
  }, [state.selectedTopic]);

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    getTopicPhotos,
    getAllPhotos,
    onClosePhotoDetailsModal,
    setDark,
  };
};
