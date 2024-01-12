import React from "react";
import PhotoList from "./components/PhotoList";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <PhotoList numPhotos={3} />
  </div>
);

export default App;
