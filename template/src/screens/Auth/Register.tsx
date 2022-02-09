import { ScrollView, Text, Input, Button, Select, View } from 'native-base';
import auth from '@react-native-firebase/auth';
import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { RegisterInputs, RegisterProps } from '@app-screens/types';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { registerFct } from '../../functions';

type InputSectionProps = {
  field: 'email' | 'password' | 'username' | 'confirmPassword' | 'gender';
  placeholder: string;
  isSecured?: boolean;
};

export const Register = (props: RegisterProps) => {
  const { navigation } = props;

  const formSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password length should be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must and should match'),
    gender: Yup.string().required('Gender is Required'),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
    },
    resolver: yupResolver(formSchema),
  });
  const onSubmit: SubmitHandler<RegisterInputs> = data => {
    registerFct({
      email: data.email,
      username: data.username,
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
        Register
      </Text>
      <InputSection field="username" placeholder="Username" />
      <InputSection field="email" placeholder="Email" />
      <InputSection field="password" placeholder="Password" isSecured />
      <InputSection
        field="confirmPassword"
        placeholder="Confirm Password"
        isSecured
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange } }) => (
          <Select width="85%" mt={2} onValueChange={onChange}>
            <Select.Item label="Male" value="male" />
            <Select.Item label="Female" value="female" />
            <Select.Item label="Other" value="other" />
          </Select>
        )}
        name="gender"
      />
      {errors.gender && (
        <Text color="red.400" fontSize="xs">
          {errors.gender.message}
        </Text>
      )}
      <Button mt={6} onPress={handleSubmit(onSubmit)}>
        Register
      </Button>
      <View flexDirection="row" mt={2}>
        <Text>Already have an account?</Text>
        <Text
          fontSize="sm"
          color="blue.500"
          ml={2}
          onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </View>
    </ScrollView>
  );
};
