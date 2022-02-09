import { HomeProps } from '@app-screens/types';
import React from 'react';
import { View, Text, Image, Button } from 'native-base';
import { IMAGES } from '../constants';

export const Home = (props: HomeProps) => {
  const { navigation } = props;
  return (
    <View
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="#fff"
      _dark={{
        bg: '#000',
      }}>
      <Image alt="logo" source={IMAGES.logo} size={100} />
      <Text style={{ marginTop: 12 }}>Hello Jina Moon, from Home !</Text>
      <Button mt={4} onPress={() => navigation.navigate('Profile')}>
        Go to profile
      </Button>
    </View>
  );
};
