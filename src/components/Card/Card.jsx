import React from 'react'
import { useDarkContext } from '../../Context/DarkContex'
import { CardStyle } from './style'

function Card({imgCapa, title}) {
  const { color } = useDarkContext()
  return (
    <CardStyle className={color}>
      <img src={imgCapa} alt="Img Food" />
      <div className="content">
        <h2>{title}</h2>
        <p>Nulla vitae elit libero, a pharetra augue.</p>
      </div>
    </CardStyle>
  )
}

export default Card