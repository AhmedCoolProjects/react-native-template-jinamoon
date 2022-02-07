import { HomeProps } from '@app-screens/types';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { IMAGES } from '../constants';

export const Home = (props: HomeProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
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
