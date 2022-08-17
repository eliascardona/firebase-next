import React from 'react'
import Image from 'next/image'

export const Features = ({ prodName, price, imgSrc, imgAlt }) => {
  return (
    <div style={{paddingRight:'1rem'}}>
      <h2 style={{fontSize:'16px'}}>{prodName}</h2>
      <h1>{price}</h1>
      <Image width={440} height={440} src={imgSrc} alt={imgAlt}></Image>
    </div>
  )
}