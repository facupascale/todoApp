
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Home from './view/home'
const App: () => Node = () => {

  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
}
export default App;
