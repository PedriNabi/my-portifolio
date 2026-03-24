import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#250156",
    },
  },
   typography: {
   fontFamily: [
     
      '"Helvetica Neue"',
   
    ].join(','),
   
  },
});

export default theme;
