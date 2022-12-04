import React from 'react'
import './Header.scss'

import { PagesLinks } from '../PagesLinks/PagesLinks'

export const Header = () => {
  return (
    <div className='Header'>
        <PagesLinks />
    </div>
  )
}
