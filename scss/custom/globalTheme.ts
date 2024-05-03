'use client';

import { convertUnit as fn } from './../../libs/ui/src/utils/fontsFn';
import { createTheme, Theme } from '@mui/material/styles';

export const theme: Theme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    h1: {
      fontSize: fn.rem(32),
      '@media (min-width:600px)': {
        fontSize: fn.rem(44),
      },
      '@media (min-width:900px)': {
        fontSize: fn.rem(44),
      },
      '@media (min-width:1024px)': {
        fontSize: fn.rem(44),
      },
    },
  },
  palette: {
    primary: {
      main: '#1f2666',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0266f4',
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
