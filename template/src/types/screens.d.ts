declare module '@app-screens/types' {
  import { StackScreenProps } from '@react-navigation/stack';

  export type RootStackParamListProps = {
    Home: undefined;
    About: undefined;
    Login: undefined;
    Register: undefined;
    ForgetPassword: undefined;
  };

  export type HomeProps = StackScreenProps<RootStackParamListProps, 'Home'>;
  export type AboutProps = StackScreenProps<RootStackParamListProps, 'About'>;
  export type LoginProps = StackScreenProps<RootStackParamListProps, 'Login'>;
  export type RegisterProps = StackScreenProps<
    RootStackParamListProps,
    'Register'
  >;
  export type ForgetPasswordProps = StackScreenProps<
    RootStackParamListProps,
    'ForgetPassword'
  >;
}
