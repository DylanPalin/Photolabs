import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavorited, onFavClick }) => {
  return (
    <div className='fav-badge' onClick={onFavClick}>
      <FavIcon displayAlert={isFavorited}/>
    </div>
  ) 
};

export default FavBadge;