import React from "react";
import PhotoList from './PhotoList';
import TopNavigationBar from "./TopNavigationBar";
import "./HomeRoute";

// Note: Rendering a single component to build components in isolation
const HomeRoute = () => (
  <div className="HomeRoute">
    <TopNavigationBar />
    <PhotoList numPhotos={3} />
  </div>
);

export default HomeRoute;
