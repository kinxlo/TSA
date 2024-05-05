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
      letterSpacing: fn.rem(0.5),
      lineHeight: 1.5,
      fontWeight: 700,
      // color: `#1f2666`,
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
    h2: {
      color: `#1f2666`,
      letterSpacing: fn.rem(0.5),
      lineHeight: 1.5,
      fontWeight: 700,
      // '@media (min-width:600px)': {
      //   fontSize: fn.rem(44),
      // },
      // '@media (min-width:900px)': {
      //   fontSize: fn.rem(44),
      // },
      // '@media (min-width:1024px)': {
      //   fontSize: fn.rem(44),
      // },
    },
    h3: {
      color: `#1f2666`,
      letterSpacing: fn.rem(0.5),
      lineHeight: 1.5,
      fontWeight: 700,
      // '@media (min-width:600px)': {
      //   fontSize: fn.rem(44),
      // },
      // '@media (min-width:900px)': {
      //   fontSize: fn.rem(44),
      // },
      // '@media (min-width:1024px)': {
      //   fontSize: fn.rem(44),
      // },
    },
    h4: {
      color: `#1f2666`,
      letterSpacing: fn.rem(0.5),
      lineHeight: 1.5,
      fontWeight: 600,
      fontSize: fn.rem(26),
      '@media (min-width:600px)': {},
      '@media (min-width:900px)': {},
      '@media (min-width:1024px)': {
        fontSize: fn.rem(32),
      },
    },
    h5: {
      color: `#1f2666`,
      letterSpacing: fn.rem(0.5),
      lineHeight: 1.5,
      fontWeight: 600,
      // '@media (min-width:600px)': {
      //   fontSize: fn.rem(44),
      // },
      // '@media (min-width:900px)': {
      //   fontSize: fn.rem(44),
      // },
      // '@media (min-width:1024px)': {
      //   fontSize: fn.rem(44),
      // },
    },
    h6: {
      color: `#1f2666`,
      letterSpacing: fn.rem(0.5),
      lineHeight: 1.5,
      fontWeight: 600,
      // '@media (min-width:600px)': {
      //   fontSize: fn.rem(44),
      // },
      // '@media (min-width:900px)': {
      //   fontSize: fn.rem(44),
      // },
      // '@media (min-width:1024px)': {
      //   fontSize: fn.rem(44),
      // },
    },
    // body1: {
    //   color: `#1c1d1d`,
    // },
    body2: {
      color: `#1c1d1d`,
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
