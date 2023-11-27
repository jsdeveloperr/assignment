import React from 'react';

import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { Control } from 'react-hook-form/dist/types';

export interface FormInputProps {
  type?: string;
  name: string;
  control: Control<any>; // eslint-disable-line
  label?: string;
  size?: 'small' | 'medium';
  autoComplete?: string;
  maxRows?: number | string;
  minRows?: number | string;
  multiline?: boolean;
  defaultValue?: number | string | null;
  variant?: 'outlined' | 'standard' | 'filled';
}

export const FormTextField = ({
  type = 'text',
  name,
  control,
  label,
  size = 'medium',
  autoComplete = 'email',
  maxRows = 0,
  minRows = 0,
  multiline = false,
  defaultValue,
  variant = 'outlined',
}: FormInputProps) => (
  <Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
      <TextField
        ref={ref}
        type={type}
        helperText={error ? error.message : null}
        size={size}
        margin="normal"
        error={!!error}
        onChange={onChange}
        maxRows={maxRows}
        minRows={minRows}
        multiline={multiline}
        value={value}
        fullWidth
        label={label}
        variant={variant}
        autoComplete={autoComplete}
      />
    )}
  />
);

export default FormTextField;
