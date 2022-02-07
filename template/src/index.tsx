import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { Home } from './screens';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Home />
    </>
  );
};

export default App;
