import React from 'react'
import './HeaderPanel.scss'

import { Logo } from '../Logo/Logo'
import { Phone } from '../Phone/Phone'
import { Cabinet } from '../Cabinet/Cabinet'

export const HeaderPanel = () => {
  return (
    <div className='HeaderPanel'>
        <Logo />
        <Phone />
        <Cabinet />
    </div>
  )
}
