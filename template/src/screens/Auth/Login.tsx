import { ScrollView, Text, Input, Button, View } from 'native-base';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { LoginInputs, LoginProps } from '@app-screens/types';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginFct } from '../../functions';

type InputSectionProps = {
  field: 'email' | 'password';
  placeholder: string;
  isSecured?: boolean;
};

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
  } = useForm<LoginInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(formSchema),
  });
  const onSubmit: SubmitHandler<LoginInputs> = data => {
    loginFct({
      email: data.email,
      password: data.password,
    });
  };
  const InputSection = (props_local: InputSectionProps) => {
    const { field, placeholder, isSecured } = props_local;
    return (
      <>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              width="85%"
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mt={2}
              secureTextEntry={isSecured}
            />
          )}
          name={field}
        />
        {errors[field] && (
          <Text color="red.400" fontSize="xs">
            {errors[field]?.message}
          </Text>
        )}
      </>
    );
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
      <InputSection field="email" placeholder="Email" />
      <InputSection field="password" placeholder="Password" isSecured />
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
