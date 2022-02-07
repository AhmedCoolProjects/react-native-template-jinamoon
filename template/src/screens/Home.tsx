import React from 'react';
import { View, Text, Image } from 'react-native';
import { IMAGES } from '../constants';
import { HomeScreenProps } from '../types';

export const Home = (props: HomeScreenProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={IMAGES.logo}
        style={{
          width: 100,
          height: 100,
        }}
      />
      <Text style={{ marginTop: 12 }}>Hello Jina Moon, from Home !</Text>
    </View>
  );
};
