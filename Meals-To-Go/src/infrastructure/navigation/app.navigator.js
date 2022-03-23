import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';


import { SafeArea } from '../../components/utility/safe-area.component';
import { RestaurantsNavigator } from './restaurants.navigator';
const Tab = createBottomTabNavigator();
  
  const TAB_ICON = {
    Restaurant: 'md-restaurant',
    Map: 'md-map',
    Settings: 'md-settings',
  };
  
  const Restaurant = () => <Text>Restaurant</Text>;
  const Map = () => <SafeArea><Text>Map</Text></SafeArea>;
  const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>;
  


  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name]
    return {
      tabBarIcon: ({ color, size }) => (
        <Ionicons name={iconName} size={size} color={color} />
    ),  
  };
};
export const AppNavigator = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={arg => ({ 
        ...createScreenOptions(arg),
        tabBarActiveTintColor: 'seagreen',
        tabBarInactiveTintColor: 'brown',
      })}
    >
      <Tab.Screen name="Restaurant" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

