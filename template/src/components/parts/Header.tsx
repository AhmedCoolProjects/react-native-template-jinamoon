import React from 'react';
import { IMAGES } from '../../constants';
import { HeaderProps } from '@app-parts/types';
import { Image, Switch, Text, useColorMode, View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { changeModeAction, useAppDispatch, useAppSelector } from '../../store';

export const Header = (props: HeaderProps) => {
  const { title, right } = props;
  const appMode = useAppSelector(state => state.mode);
  const dispatch = useAppDispatch();
  const { colorMode, setColorMode } = useColorMode();
  const changeMode = () => {
    dispatch(
      changeModeAction({
        appMode: appMode.appMode === 'dark' ? 'light' : 'dark',
      })
    );
    setColorMode(appMode.appMode === 'dark' ? 'light' : 'dark');
  };

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
      <Switch isChecked={appMode.appMode === 'dark'} onChange={changeMode} />
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
        }}>
        {colorMode === 'dark' ? '🌙' : '🌞'} {title}
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
