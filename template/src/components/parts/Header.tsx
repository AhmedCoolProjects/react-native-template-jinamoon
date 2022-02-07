import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { HeaderProps } from '@app-parts/types';
import { IMAGES } from '../../constants';

export const Header = (props: HeaderProps) => {
  const { title, right } = props;
  return (
    <View
      style={{
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      <TouchableOpacity onPress={right?.onPress}>
        <Image
          source={IMAGES.logo}
          style={{
            height: 32,
            width: 32,
            resizeMode: 'cover',
            borderRadius: 24,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
