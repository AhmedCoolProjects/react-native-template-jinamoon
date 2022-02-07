import React from 'react';
import { AboutProps } from '@app-screens/types';
import { IMAGES } from '../constants';
import { Image, ScrollView, Text, useColorMode } from 'native-base';
import { Linking, TouchableOpacity } from 'react-native';

type SectionType = {
  onPress: () => void;
  title: string;
  icon: ImageSourcePropType;
  iconStyle?: {};
};

const SECTION = (props: SectionType) => {
  const { onPress, title, icon, iconStyle } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        paddingVertical: 8,
        paddingHorizontal: 32,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
      }}>
      <Image
        alt="logo"
        size={12}
        resizeMode="cover"
        borderRadius={50}
        marginRight={8}
        source={icon}
        style={{
          ...iconStyle,
        }}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export const About = (props: AboutProps) => {
  const { colorMode } = useColorMode();
  return (
    <ScrollView
      bg={'#fff'}
      _dark={{
        bg: '#000',
      }}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100%',
      }}>
      <Image
        size={170}
        resizeMode="cover"
        borderRadius={100}
        alt="my_image"
        source={IMAGES.me}
      />
      <Text fontSize={24} fontWeight="bold" marginY={4}>
        Ahmed Bargady
      </Text>
      <SECTION
        title="www.ahmedbargady.me"
        icon={IMAGES.meLogo}
        onPress={() => Linking.openURL('https://ahmedbargady.me')}
      />
      <SECTION
        title="@AhmedCoolProjects"
        icon={IMAGES.github}
        onPress={() => Linking.openURL('https://github.com/AhmedCoolProjects')}
        iconStyle={{
          tintColor: colorMode === 'dark' ? '#fff' : '#000',
        }}
      />
      <SECTION
        title="Ahmed Bargady"
        icon={IMAGES.linkedin}
        onPress={() =>
          Linking.openURL('https://www.linkedin.com/in/ahmed-bargady')
        }
        iconStyle={{
          tintColor: colorMode === 'dark' ? '#fff' : '#000',
        }}
      />
      <SECTION
        title="@ahmedBargady"
        icon={IMAGES.kaggle}
        onPress={() => Linking.openURL('https://www.kaggle.com/ahmedbargady')}
        iconStyle={{
          tintColor: colorMode === 'dark' ? '#fff' : '#000',
        }}
      />
      <SECTION
        title="@JinaMoon"
        icon={IMAGES.logo}
        onPress={() => Linking.openURL('https://github.com/JinaMoon')}
      />
    </ScrollView>
  );
};
