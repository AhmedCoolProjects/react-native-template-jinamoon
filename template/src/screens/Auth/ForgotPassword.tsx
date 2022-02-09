import { Text, ScrollView, Button, View } from 'native-base';
import React from 'react';
import { AuthInputs, ForgotPasswordProps } from '@app-screens/types';
import * as Yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPasswordFct } from '../../functions/resetPassword';
import { InputSection } from '../../components';

export const ForgotPassword = (props: ForgotPasswordProps) => {
  const { navigation } = props;
  const formSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthInputs>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(formSchema),
  });
  const onSubmit: SubmitHandler<AuthInputs> = data => {
    resetPasswordFct({
      email: data.email,
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
        Reset Password
      </Text>
      <InputSection
        control={control}
        errors={errors}
        field="email"
        placeholder="Email"
      />
      <Button mt={6} onPress={handleSubmit(onSubmit)}>
        Send Reset Link
      </Button>
      <View flexDirection="row" justifyContent="flex-end" width="80%" mt={2}>
        <Text fontSize="xs">Return to</Text>
        <Text
          fontSize="xs"
          color="blue.500"
          ml={2}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </View>
    </ScrollView>
  );
};
