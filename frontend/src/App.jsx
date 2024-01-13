import React from "react";
import PhotoList from "./components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";

import "./App.scss";
import TopNavigation from "components/TopNavigationBar";

// Note: Rendering a single component to build components in isolation
const App = () => (
  <div className="App">
    <TopNavigationBar />
    <PhotoList numPhotos={3} />
  </div>
);

export default App;
