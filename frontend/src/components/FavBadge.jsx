import React from 'react';
import FavIcon from './FavIcon';
import SunIcon from './SunIcon';
import '../styles/FavBadge.scss';
import MoonIcon from './MoonIcon';

const FavBadge = ({ dark, setDark, ifFavPhotoExist }) => {
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!ifFavPhotoExist} selected={true} dark={dark}/>
    </div>
  ) 
};

export default FavBadge;