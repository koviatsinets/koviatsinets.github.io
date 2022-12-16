import React from 'react'
import './HeaderPanel.scss'
import imgLogo from '../../assets/lego-logo.svg'

export const HeaderPanel = () => {
  return (
    <div className='HeaderPanel'>
        <img src={imgLogo} className='Logo' alt='logo'></img>
        <p className='NameMarket'>Интернет-магазин LEGO</p>
        <span className="Cabinet material-symbols-outlined">person</span>
    </div>
  )
}
