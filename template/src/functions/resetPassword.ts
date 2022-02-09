import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

type ForgotPasswordProps = {
  email: string;
};

export const resetPasswordFct = (props: ForgotPasswordProps) => {
  const { email } = props;
  auth()
    .sendPasswordResetEmail(email)
    .then(() =>
      Alert.alert('Great!', "We've sent you an email to reset your password")
    )
    .catch(error => Alert.alert('Error!', error.message?.split('] ')[1]));
};
