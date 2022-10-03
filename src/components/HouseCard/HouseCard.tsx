import React from 'react';
import { ReactComponent as AddFavorite } from '../../icons/add_favourite.svg';
import { ReactComponent as RemoveFavorite } from '../../icons/favourite.svg';

import "./HouseCard.scss";

type CardProps = {
  url?: string;
  name: string;
  region?: string;
  coatOfArms?: string;
  words?: string;
  isFavorite?: boolean;
  handleAddFavorites?: () => void;
  handleRemoveFavorites?: () => void;
};
  
export const HouseCard: React.FC<CardProps> = ({
  name,
  region,
  coatOfArms,
  words,
  isFavorite = undefined,
  handleAddFavorites,
  handleRemoveFavorites
}) => {

  return (   
      <div className='house_card_div'>
        <div className='photo'>
          <img className='tron_photo' src="../images/tron.jpeg" alt="photo" />
        </div>
        <div className='content'>
          <div className='name'> {name}</div>
          <div className='region'> Region: {region}</div>
        <div className='coatOfArms'> Coat of Arms: {coatOfArms}</div>
        <div className='words'> Words: {words}</div>
        {isFavorite !== undefined && <div className='heart'>
          {isFavorite ? <RemoveFavorite onClick={handleRemoveFavorites} /> : <AddFavorite onClick={handleAddFavorites} />}
        </div>} 
      </div>
      </div>
  );
};