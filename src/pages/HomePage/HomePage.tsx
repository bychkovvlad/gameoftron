import { Link } from "react-router-dom";
import { observer, useLocalStore } from "mobx-react-lite";
import React, { useCallback, useEffect, useState } from "react";
import { HouseCard } from "../../components/HouseCard";
import { HousesStore } from "../../stores/HousesStore";
import { Houses } from "../../stores/HousesStore/types";
import './HomePage.scss'

const HomePage: React.FC = () => {
  const housesStore = useLocalStore(() => new HousesStore());
  const [favorites, setfavorites] = useState<Houses[]>(JSON.parse(localStorage.getItem('favorites') || '') || []);  
  
  useEffect(() => {
    housesStore.getHousesList();
  }, [housesStore]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [setfavorites, favorites])
  

  const handleAddfavorites = useCallback((fav: Houses) => {
    setfavorites((prev) => [fav, ...prev])
  }, [])

  const handleDeletefavorites = useCallback((fav: Houses) => {
    setfavorites((prev) => {
      return prev.filter((el) => el.name !== fav.name)
    })
  }, [])

  return (
    <div>
      <div className="blockDiv">
          <div className='favorites'>
          {/* <div className='favorites_title'>Избранное | </div> */}
          <Link to='/favorites'>
            <div>
              <img className='star' src={"../images/star.png"} alt="logo" />
            </div>
            </Link>
        </div>
      </div>
      {housesStore.houses && housesStore.houses.map((home) => (  
        <HouseCard
            isFavorite={favorites.filter((fav) => fav.name === home.name).length > 0}
            key={home.name}
            name={home.name}
            region={home.region}
            coatOfArms={home.coatOfArms}
            words={home.words} 
            handleAddFavorites={() => handleAddfavorites(home)}
            handleRemoveFavorites={() => handleDeletefavorites(home)}
          />
      
      ))}
    </div>
  );
};

export default observer(HomePage);