import React from "react";
import { createStackNavigator } from '@react-navigator/stack';
import { RestaurantContext } from "../../services/restaurants.context";

import { RestaurantScreens } from "../../features/restaurants/screens/restaurant.screens";
const RestaurantStack = createStackNavigator();

 export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen
        name='restaurants'
        component={RestaurantScreens}

      />
     </RestaurantStack.Navigator>
  )
}