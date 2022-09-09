import { green, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const fontFamily = ['Ubuntu', 'Roboto', 'Inter', 'sans-serif'].join(',');
const theme = createTheme({
  palette: {
    primary: {
      main: '#0284c7',
      dark: '#075985',
      light: '#e0f2fe',
      '50': '#f0f9ff',
      '100': '#e0f2fe',
      '200': '#bae6fd',
      '300': '#7dd3fc',
      '400': '#38bdf8',
      '500': '#0ea5e9',
      '600': '#0284c7',
      '700': '#0369a1',
      '800': '#075985',
      '900': '#0c4a6e',
    },
    secondary: {
      main: '#19857b',
      dark: '#015255',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: green.A700,
    },
  },
  typography: {
    fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html, body{
          font-family: ${fontFamily};
        }
      `,
    },
  },
});

export default theme;
