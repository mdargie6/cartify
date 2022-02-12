/**
 * @Author: whatmez
 * @Date:   2022-02-10T03:06:12-05:00
 * @Last modified by:   whatmez
 * @Last modified time: 2022-02-11T21:41:47-05:00
 */
 import logo from '../CARTIFY_BLACK.png'; // Tell webpack this JS file uses this image
 import Paper from '@mui/material/Paper';
 import { alpha, styled } from '@mui/material/styles';
 import { createTheme } from '@mui/material/styles';
 import Link from '@mui/material/Link';



import React from 'react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#03d083',
      contrastText: '#fff',
    },
    white: {
      light: '#ff0000',
      main: '#fff',
      dark: '#ff0000',
      contrastText: '#ff0000',
    },
  },
});

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: 'black',
}));

function Header(){
  return(
    <Link href="/home"  target="_blank" >
    <img src={logo} width="90%" alt="Logo"/>
    </Link>


  )
}

export default Header;
