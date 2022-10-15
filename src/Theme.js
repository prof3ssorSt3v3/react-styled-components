import { ThemeProvider } from 'styled-components';

const coolTheme = {
  colors: {
    darkerBg: '#222',
    lighterBg: '#444',
    brightTxt: '#fff',
    dullTxt: '#ddd',
  },
  fonts: ['Roboto', 'sans-serif'],
  fontSizes: {
    xsmall: '0.8rem',
    small: '1.0rem',
    medium: '1.5rem',
    large: '3rem',
    xlarge: '4.5',
  },
  fontWeights: {
    light: 100,
    normal: 300,
    bold: 500,
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={coolTheme}>{children}</ThemeProvider>;
}
