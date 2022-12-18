import React from 'react'
import './HeaderPanel.scss'
import imgLogo from '../../assets/lego-logo.svg'

export const HeaderPanel = () => {

  return (
    <div className='HeaderPanel'>
        <img src={imgLogo} className='Logo' alt='logo'></img>
        <p className='NameMarket'>Интернет-магазин "LEGO". Время работы: 09.00 - 20.00. Тел: +375291448698</p>
        <span className="Cabinet material-symbols-outlined">person</span>
    </div>
  )
}
