
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import Home from './view/home'
import {TaskContextProvider} from './context/index'

const App = () => {

  return (
      <TaskContextProvider>
        <Home />
      </TaskContextProvider>
  );
}
export default App;
