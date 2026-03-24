import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#0c0c0c",
    },
  },
   typography: {
   fontFamily: [
     
      '"Helvetica Neue"',
   
    ].join(','),
   
  },
});

export default theme;
