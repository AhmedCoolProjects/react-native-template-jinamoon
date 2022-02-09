import { ProfileProps } from '@app-screens/types';
import { Text, ScrollView, Image, Button } from 'native-base';
import React from 'react';
import { logoutFct } from '../functions';
import { useAppSelector } from '../store';
import auth from '@react-native-firebase/auth';

export const Profile = (props: ProfileProps) => {
  const user = useAppSelector(state => state.user);
  const fireUser = auth().currentUser;
  const submitLogout = () => {
    logoutFct();
  };

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
      {user?.photoURL ? (
        <Image
          size={170}
          resizeMode="cover"
          rounded="full"
          alt={user.name || 'user'}
          source={{
            uri: user.photoURL,
          }}
          mb={4}
        />
      ) : null}
      <Text fontSize={24} fontWeight="bold" marginY={2}>
        {user.name}
      </Text>
      <Text>{user.email}</Text>
      <Button mt={4} onPress={submitLogout}>
        Logout
      </Button>
    </ScrollView>
  );
};
