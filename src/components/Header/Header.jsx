import React from 'react'
import { useDarkContext } from '../../Context/DarkContex'
import { GlobalStyle } from '../../styles/global'
import ButtonDark from '../ButtonDarkMode/ButtonDark'


import { HeaderStyle } from './style'


function Header() {
  const { color } = useDarkContext()
  return (
    <>
    <HeaderStyle className={color}>
      <ButtonDark />
      <h1>Love <span>Pizza</span> 🍕</h1>

    </HeaderStyle>
     <GlobalStyle className={color}  />
    </>
  )
}

export default Header