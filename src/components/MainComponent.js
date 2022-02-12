import React from 'react'
import Header from './HeaderComponent'
import Footer from './FooterComponent'

import About from './AboutComponent'
import Home from './HomeComponent'


import {Routes,Navigate,Route,Redirect,withRouter} from 'react-router-dom'
// import Item from '@mui/material/Item';
import Stack from '@mui/material/Stack';

function Main (){
  return(
    <React.Fragment>
    <Home/>
    </React.Fragment>
  )
}

export default Main;
