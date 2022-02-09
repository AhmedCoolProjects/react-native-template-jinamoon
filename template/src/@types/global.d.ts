declare module '@app-screens/types' {
  import { StackScreenProps } from '@react-navigation/stack';

  export type RootStackParamListProps = {
    Home: undefined;
    About: undefined;
    Login: undefined;
    Register: undefined;
    ForgotPassword: undefined;
    Profile: undefined;
  };

  export type HomeProps = StackScreenProps<RootStackParamListProps, 'Home'>;
  export type AboutProps = StackScreenProps<RootStackParamListProps, 'About'>;
  export type LoginProps = StackScreenProps<RootStackParamListProps, 'Login'>;
  export type RegisterProps = StackScreenProps<
    RootStackParamListProps,
    'Register'
  >;
  export type ForgotPasswordProps = StackScreenProps<
    RootStackParamListProps,
    'ForgotPassword'
  >;
  export type ProfileProps = StackScreenProps<
    RootStackParamListProps,
    'Profile'
  >;
  export type LoginInputs = {
    email: string;
    password: string;
  };
  export type RegisterInputs = {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
    gender: string;
  };

  export type ForgotPasswordInputs = {
    email: string;
  };
}
declare module '@app-parts/types' {
  import { ImageSourcePropType } from 'react-native';
  export type HeaderProps = {
    title: string;
    left?: {
      icon?: ImageSourcePropType;
      text?: string;
      onPress?: () => void;
    };
    right?: {
      icon?: ImageSourcePropType;
      text?: string;
      onPress?: () => void;
    };
  };
}
