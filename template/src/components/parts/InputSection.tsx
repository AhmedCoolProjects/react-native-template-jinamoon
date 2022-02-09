import * as React from 'react';
import { Input, Text } from 'native-base';
import { Control, Controller } from 'react-hook-form';
import { AuthInputs } from '@app-screens/types';

type InputSectionProps = {
  field: 'email' | 'password' | 'username' | 'confirmPassword' | 'gender';
  placeholder: string;
  isSecured?: boolean;
  control: Control<AuthInputs, object>;
  errors?: any;
};

export const InputSection = (props_local: InputSectionProps) => {
  const { field, placeholder, isSecured, control, errors } = props_local;
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
