import {
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
  ImageSourcePropType,
  ScrollView,
} from 'react-native';
import React from 'react';
import { AboutProps } from '@app-screens/types';
import { IMAGES } from '../constants';

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
        style={{
          width: 45,
          height: 45,
          resizeMode: 'cover',
          borderRadius: 50,
          marginRight: 24,
          ...iconStyle,
        }}
        source={icon}
      />

      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export const About = (props: AboutProps) => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        minHeight: '100%',
      }}>
      <Image
        style={{
          width: 170,
          height: 170,
          resizeMode: 'cover',
          borderRadius: 100,
        }}
        source={IMAGES.me}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#fff',
          marginTop: 4,
          marginBottom: 8,
        }}>
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
          tintColor: '#fff',
        }}
      />
      <SECTION
        title="Ahmed Bargady"
        icon={IMAGES.linkedin}
        onPress={() =>
          Linking.openURL('https://www.linkedin.com/in/ahmed-bargady')
        }
        iconStyle={{
          tintColor: '#fff',
        }}
      />
      <SECTION
        title="@ahmedBargady"
        icon={IMAGES.kaggle}
        onPress={() => Linking.openURL('https://www.kaggle.com/ahmedbargady')}
        iconStyle={{
          tintColor: '#fff',
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
