import React, { useEffect, useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Button, Checkbox, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import {
  encodeBase64,
  decodeBase64,
  decodeBase64Object,
  encodeBase64Object,
} from '../../../libs/helpers/index';
import { FormTextField } from '../../../libs/ui/components/FormTextField';
import { SignInFormInput } from '../types';

export type SignInFormProps = {
  defaultValues?: SignInFormInput;
  isLogging: boolean | undefined;
  onSubmitClick(data: SignInFormInput): void;
};

export const SignInForm = (props: SignInFormProps) => {
  const { t } = useTranslation();
  const getRememberMe = localStorage.getItem('remember_me') as any;
  const encodeUserInfo =
    getRememberMe !== null ? encodeBase64Object(getRememberMe) : null;
  const encodedUserName = encodeUserInfo?.username
    ? encodeBase64(encodeUserInfo?.username)
    : 'kminchelle';
  const encodedPassword = encodeUserInfo?.password
    ? encodeBase64(encodeUserInfo?.password)
    : '0lelplR';
  const [isRememberMe, setRememberMe] = useState(
    encodeUserInfo?.remember_me || false
  );
  const [username, setUserName] = useState(encodedUserName);
  const [password, setPassword] = useState(encodedPassword);

  const {
    defaultValues = {
      username,
      password,
    },
    isLogging,
    onSubmitClick,
  } = props;

  const newSignInValidationSchema = Yup.object().shape({
    username: Yup.string()
      .required(`${t('signin.form.validation.username-required')}`)
      .min(4, 'Username must be at least 4 characters')
      .max(20, `${t('signin.form.validation.username-max', { num: 20 })}`),
    password: Yup.string()
      .required(`${t('signin.form.validation.password-required')}`)
      .min(6, '​Password must be at least 6 characters')
      .max(20, `${t('signin.form.validation.password-max', { num: 20 })}`),
  });

  const methods = useForm<SignInFormInput>({
    defaultValues,
    resolver: yupResolver(newSignInValidationSchema),
  });
  const { handleSubmit, control } = methods;

  const handleRememberMeLocalStorage = (data: any) => {
    if (isRememberMe === true) {
      const decodedUserInfo = decodeBase64Object({
        username: decodeBase64(data.username),
        password: decodeBase64(data.password),
        remember_me: isRememberMe,
      });
      localStorage.setItem('remember_me', decodedUserInfo);
    }
  };

  const handleSigninSubmit = (data: any) => {
    handleRememberMeLocalStorage(data);
    onSubmitClick(data);
  };

  const onChangeRememberMe = (newValue: any) => {
    setRememberMe(newValue.target.checked);

    if (!newValue.target.checked) {
      localStorage.removeItem('remember_me');
    }
  };

  useEffect(() => {
    if (encodeUserInfo && encodeUserInfo?.remember_me === true) {
      setUserName(encodedUserName);
      setPassword(encodedPassword);
      setRememberMe(encodeUserInfo?.remember_me);
    }
  }, []);

  return (
    <>
      <FormTextField
        name="username"
        label={t('signin.form.username')}
        control={control}
        autoComplete="email"
      />
      <FormTextField
        type="password"
        name="password"
        label={t('signin.form.password')}
        control={control}
        autoComplete="current-password"
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              checked={isRememberMe}
              onChange={newValue => onChangeRememberMe(newValue)}
              sx={{
                '&.Mui-checked': {
                  color: '#D23F57',
                },
              }}
            />
          }
          label="Remember me"
          sx={{
            fontWeight: 400,
          }}
        />
      </Box>
      <Button
        onClick={handleSubmit(handleSigninSubmit)}
        fullWidth
        variant="contained"
        sx={{
          my: 2,
          backgroundColor: '#D23F57',
          borderRadius: 1,
          fontSize: 18,
          textTransform: 'capitalize',
          '&:hover': {
            bgcolor: '#848587',
          },
        }}
      >
        {isLogging && (
          <CircularProgress size={25} sx={{ color: '#fff', marginRight: 1 }} />
        )}
        {t('signin.button.submit')}
      </Button>
    </>
  );
};
