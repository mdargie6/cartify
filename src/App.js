/**
 * @Author: whatmez
 * @Date:   2022-02-10T16:31:18-05:00
 * @Last modified by:   whatmez
 * @Last modified time: 2022-02-11T22:17:26-05:00
 */



import React, {useState} from 'react';
import Main from './components/MainComponent'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Grow from '@mui/material/Grow';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import tik from './tiktok.svg'; // Tell webpack this JS file uses this image


import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { createTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  backgroundColor: 'black',
  align: 'center',
}));


const CssTextField = styled(TextField)({

  '& label.MuiFormLabel-root': {
    color: '#FFFFFF',
  },

  '& label.Mui-focused': {
    color: 'white',
  },

  '& .MuiInput-underline:after': {
    color: 'white',
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      color: 'white',
      borderColor: 'white',
    },
    '&:hover fieldset': {
      color: 'white',
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      color: 'red',
      borderColor: 'red',
    },
    color:'white'
  },
});

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

function sayHello() {
  alert('You clicked me!');
}

async function cartify(){
	var value = document.getElementById("input").value;
  if(value == "" || value == null) {
    document.getElementById("output").innerHTML ='';
    return
  }

  var cartified = ''
  for (let i = 0; i < value.length; i++) {
    let letter = value.charAt(i)
    if (letter == 'o' || letter == 'O' ) {
      cartified = cartified.concat('0')
    } else if (letter == 'e' && (Math.floor(Math.random()*2) || letter == 'E')) {
      cartified = cartified.concat('3')
    } else if (letter == ' ') {
      cartified = cartified.concat(' ')
    } else if (Math.floor(Math.random() * 3)) {
      cartified = cartified.concat(letter.toLowerCase());
    } else {
      cartified = cartified.concat(letter.toUpperCase());
    }
    if (Math.floor(Math.random() * 30) < 3) {
      let specials = ["*", "$","+", "<3", "!", "^", "/", ".", " ."]
      let ind = Math.floor(Math.random() * specials.length)
      cartified = cartified.concat(specials[ind]);
      console.log(specials[ind])
    }
  }
  cartified = cartified.concat(' <3')
  for (let i = 0; i < cartified.length; i++) {
    // console.log(cartified[i]);
    document.getElementById("output").innerHTML = cartified.slice(0,i+1);
    await new Promise(r => setTimeout(r, 25));
  }


}
const onKeyPress = (e: any) => { if (e.which == 13) { cartify() }};


function App() {
  return (
    <div className="App">
    <Header sx={{mt:30}}/>
    <Stack  sx={{backgroundColor: 'black'}} component = {Paper} spacing={2} mt={0} mb={10} color='primary'>
    <Item sx={{ color: '#fff', fontFamily:'Courier', textAlign:'center', fontSize:"70%" }} theme={theme} color='primary'>
    *easiest way in the world to type like playboi carti*
      </Item>
    <Item>
    </Item>

    <Item theme={theme} color='white'>
      <CssTextField onKeyPress={onKeyPress} style ={{width: '70%'}} sx={{ input: { color: 'white' } }}  color="error"  id="input"  label="whAt u wanna cArtiFy!" variant="outlined" />
    </Item>
    <Item>
      <Button onClick={cartify} sx={{ mb:3 , mt:3, fontFamily:'Courier', textTransform:'initial', fontSize:"100%"  }} size="large" variant="contained" theme={theme} color='error' spacing={0}>
        cArtIfy!
      </Button>
    </Item >
    <Item id='output' style = {{height:50, color:'white',fontSize: 30}}>
    </Item>

    </Stack >

    <Item sx={{ color: '#fff', fontFamily:'Courier', textAlign:'center' }}>
    <Link href="http://www.instagram.com/whatmez"  target="_blank" >
        <InstagramIcon theme={theme} color='white' />
    </Link>
<Link href="http://www.tiktok.com/@whatmez"  target="_blank" >
<img width="30" height="auto" src={tik}/>
</Link>

</Item>

<Item sx={{ color: '#fff', fontFamily:'Courier', textAlign:'center' }}>
@whatmez
</Item>

    </div>
  );
}

export default App;
