import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'
import TabNavigator from './src/navigators/TabNavigator'

const Stack = createNativeStackNavigator();

const App = () => {
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
      <Stack.Screen
        name="Favoutires"
        component={FavoritesScreen}
        options={{ animation: 'slide_from_bottom' }}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
}

export default App