//Core imports
import React from 'react';
//Dependecies imports
import { NavigationContainer } from '@react-navigation/native';
//Views Imports or navigators
import MainDrawerNav from "./src/views/Navigators";

//root component
const App = () => {
  return (
    <NavigationContainer>
      <MainDrawerNav />
    </NavigationContainer>
  );
};

export default App;
