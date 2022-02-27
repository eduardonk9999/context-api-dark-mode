import React, { useContext, useState } from 'react'
import { useDarkContext } from '../../Context/DarkContex'

import { ButtonStyle } from './style'


function ButtonDark() {
  const [startDark, setStartDark] = useState(false)
  const { setColor, color } = useDarkContext()

  function darkModeStart(){
    setStartDark(!startDark)

    if(startDark) {
      setColor('lightTheme')
    } else {
      setColor('darkTheme') 
    }
  }
  return ( 
    <>
      {startDark ? <ButtonStyle className={color} onClick={darkModeStart}> 🌙 </ButtonStyle> 
      :<ButtonStyle className={color}  onClick={darkModeStart}> ☀️ </ButtonStyle>}
    </>
  )
}

export default ButtonDark