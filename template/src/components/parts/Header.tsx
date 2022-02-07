import React from 'react';
import { HeaderProps } from '@app-parts/types';
import { IMAGES } from '../../constants';
import { Image, Switch, Text, useColorMode, View } from 'native-base';
import { TouchableOpacity } from 'react-native';

export const Header = (props: HeaderProps) => {
  const { title, right } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <View
      _dark={{
        bg: '#000',
      }}
      bg="#fff"
      width="100%"
      paddingY={4}
      paddingX={6}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center">
      <Switch
        isChecked={colorMode === 'dark'}
        onValueChange={toggleColorMode}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
      <TouchableOpacity onPress={right?.onPress}>
        <Image
          alt="logo"
          source={IMAGES.logo}
          size={8}
          resizeMode="cover"
          borderRadius={16}
        />
      </TouchableOpacity>
    </View>
  );
};
