import React, { useState, useEffect, useMemo, useContext, createContext } from 'react';
import { RestaurantCard } from '../features/restaurants/components/restaurant-info-card.styles';
import { restaurantsRequest, restaurantsTransform } from './restaurants.services';

import { LocationContext } from "../services/location/location.context";

export const RestaurantContext = createContext() 

export const RestaurantContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const { location } = useContext(LocationContext);
  
  const retrieveRestaurant = (restaurantlocation) => {
    setIsLoading(true);
    setIsLoading([]);
    
    setTimeout(() => {
      restaurantsRequest(restaurantlocation)
        .then(restaurantsTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
      })
        .catch((err) => {
          setIsLoading(false),
          setError(err) 
      })
    }, 2000)
  };

    useEffect(() => {
    if (location) { 
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurant(locationString);
      
    }
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  )
}