import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import { IMAGES } from './src/constants';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar barStyle="default" />
      <Image
        source={IMAGES.logo}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <Text style={{ marginTop: 12 }}>Hello Jina Moon !</Text>
    </View>
  );
};

export default App;
