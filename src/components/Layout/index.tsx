import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import Notification from '../../libs/ui/components/Notification';
import Header from '../Header/Header';

const Layout = () => {
  const { i18n } = useTranslation();

  const onChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const customTypography = createTheme({
    typography: {
      fontFamily: 'Poppins',
    },
  }).typography;

  const theme = React.useMemo(
    () =>
      createTheme({
        typography: customTypography,
      }),
    []
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header onChangeLanguage={onChangeLanguage} />
        <Notification />
      </ThemeProvider>
    </>
  );
};

export default Layout;
