import React from 'react'
import './Logo.scss'
import image from '../../utils/lego-logo.svg'

export const Logo = () => {
  return (
    <img src={image} className='Logo' alt='logo'></img>
  )
}
