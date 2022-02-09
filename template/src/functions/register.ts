import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

type RegisterProps = {
  email: string;
  password: string;
  username: string;
};

export const registerFct = (props: RegisterProps) => {
  const { email, password, username } = props;
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      auth().currentUser?.updateProfile({
        displayName: username,
      });
      Alert.alert('Great!', `Welcome ${username}`);
    })
    .catch(error => {
      // if (error.code === 'auth/email-already-in-use') {
      //   Alert.alert('Error!', 'That email address is already in use!');
      // }
      // if (error.code === 'auth/invalid-email') {
      //   Alert.alert('Error!', 'That email address is invalid!');
      // }
      Alert.alert('Error!', error.message?.split('] ')[1]);
    });
};
