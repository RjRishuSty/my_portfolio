import React from 'react'
import logo from '../assets/logo.png';
import { Box, useMediaQuery } from '@mui/material';

const Logo = () => {
  const miniLaptop = useMediaQuery("(max-width:1100px)");
  return (
    <Box component='img' src={logo} alt="portfolio" width={miniLaptop?'150px':'200px'}/>
  )
}

export default Logo