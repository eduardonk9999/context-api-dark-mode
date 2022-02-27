import React from 'react'
import ButtonDark from '../ButtonDarkMode/ButtonDark'


import { HeaderStyle } from './style'


function Header() {
  return (
    <HeaderStyle>
      <ButtonDark />
      <h1>Love <span>Pizza</span> 🍕</h1>

    </HeaderStyle>
  )
}

export default Header