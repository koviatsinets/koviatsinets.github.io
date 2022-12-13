import React from 'react'
import './NavBar.scss'

import { Menu } from '../Menu/Menu'
import { PagesLinks } from '../PagesLinks/PagesLinks'
import { Search } from '../Search/Search'

export const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Menu />
      <PagesLinks />
      <Search />
      <div className='Cart'></div>
    </nav>
  )
}
