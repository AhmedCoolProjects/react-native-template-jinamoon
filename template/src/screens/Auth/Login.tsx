import { ScrollView, Text, Button, View } from 'native-base';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AuthInputs, LoginProps } from '@app-screens/types';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFct } from '../../functions';
import { InputSection } from '../../components';

export const Login = (props: LoginProps) => {
  const { navigation } = props;
  const formSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(4, 'Password length should be at least 4 characters'),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(formSchema),
  });
  const onSubmit: SubmitHandler<AuthInputs> = data => {
    loginFct({
      email: data.email,
      password: data.password,
    });
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
      <Text fontSize="3xl" mb={2} fontWeight="bold">
        Login
      </Text>
      <InputSection
        field="email"
        placeholder="Email"
        control={control}
        errors={errors}
      />
      <InputSection
        field="password"
        placeholder="Password"
        control={control}
        errors={errors}
        isSecured
      />
      <View flexDirection="row" justifyContent="flex-end" width="80%" mt={2}>
        <Text fontSize="xs">Forgot password?</Text>
        <Text
          fontSize="xs"
          color="blue.500"
          ml={2}
          onPress={() => navigation.navigate('ForgotPassword')}>
          Reset Password
        </Text>
      </View>
      <Button mt={6} onPress={handleSubmit(onSubmit)}>
        Login
      </Button>
      <View flexDirection="row" mt={2}>
        <Text>Don't have an account?</Text>
        <Text
          fontSize="sm"
          color="blue.500"
          ml={2}
          onPress={() => navigation.navigate('Register')}>
          Register
        </Text>
      </View>
    </ScrollView>
  );
};
