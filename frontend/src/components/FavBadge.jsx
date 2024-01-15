import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ navbarFavs, onFavClick, isFav }) => {
  return (
    <div className='fav-badge' onClick={onFavClick}>
      <FavIcon displayAlert={navbarFavs} />
    </div>
  )
};

export default FavBadge;