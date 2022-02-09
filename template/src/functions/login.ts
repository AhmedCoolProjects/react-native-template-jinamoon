import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

type LoginProps = {
  email: string;
  password: string;
};

export const loginFct = (props: LoginProps) => {
  const { email, password } = props;
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      Alert.alert('Great!', `Welcome ${userCredential.user.displayName}`);
    })
    .catch(error => {
      // if (error.code === 'auth/user-not-found') {
      //   Alert.alert('Error!', 'That email not found!');
      // }
      // if (error.code === 'auth/invalid-email') {
      //   Alert.alert('Error!', 'That email address is invalid!');
      // }
      Alert.alert('Error!', error.message?.split('] ')[1]);
    });
};
