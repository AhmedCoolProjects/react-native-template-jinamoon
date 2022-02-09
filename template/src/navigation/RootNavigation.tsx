import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthNavigation } from './AuthNavigation';
import { ContainerNavigation } from './ContainerNavigation';
import auth from '@react-native-firebase/auth';
import {
  useAppSelector,
  loginAction,
  useAppDispatch,
  logoutAction,
} from '../store';
import { IMAGES } from '../constants';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  const appUser = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user_local => {
      if (user_local) {
        dispatch(
          loginAction({
            email: user_local.email || '',
            photoURL: user_local.photoURL || IMAGES.yanni,
            name: user_local.displayName,
          })
        );
      } else {
        dispatch(logoutAction());
      }
    });
    return unsubscribe; // unsubscribe on unmount
  }, [dispatch]);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!appUser?.email ? (
        <Stack.Screen name="Auth" component={AuthNavigation} />
      ) : (
        <Stack.Screen name="Container" component={ContainerNavigation} />
      )}
    </Stack.Navigator>
  );
};
