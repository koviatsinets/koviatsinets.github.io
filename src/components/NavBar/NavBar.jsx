import React from 'react'
import './NavBar.scss'

import { Menu } from '../Menu/Menu'
import { PagesLinks } from '../PagesLinks/PagesLinks'
import { Search } from '../Search/Search'
import { Cart } from '../Cart/Cart'

export const NavBar = () => {
  return (
    <nav className='NavBar'>
      <Menu />
      <PagesLinks />
      <Search />
      <Cart />
    </nav>
  )
}
