//Core imports
import React from 'react';
//Dependecies imports
import { NavigationContainer } from '@react-navigation/native';
//Views Imports or navigators
import MainDrawerNav from "./src/views/Navigators";
//redux related imports
import store from './src/redux/store';
import {Provider} from 'react-redux';

//root component wrapped in redux provider and rn nav
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainDrawerNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
