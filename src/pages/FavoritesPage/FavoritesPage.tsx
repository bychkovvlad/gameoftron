import React, { useState } from "react";
import { HouseCard } from "../../components/HouseCard";
import { Houses } from "../../stores/HousesStore/types";
import './FavoritesPage.scss'

const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Houses[]>(JSON.parse(localStorage.getItem('favorites') || '') || []);  

  return (
    <div className="favorites_block">
        {favorites.length !==0 ? favorites.map((favorit) => (  
          <HouseCard
              key={favorit.name}
              name={favorit.name}
              region={favorit.region}
              coatOfArms={favorit.coatOfArms}
              words={favorit.words} 
          />
        )) : <div className="favorites_text">
         You did not choose anything!
      </div>}
    </div>
  );
};

export default FavoritesPage;