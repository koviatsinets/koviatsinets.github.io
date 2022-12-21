import React, { useState } from 'react'
import './HeaderPanel.scss'
import imgLogo from '../../assets/lego-logo.svg'
import { Auth } from '../../components/Auth/Auth'

export const HeaderPanel = () => {

  const [modeVisible, setModeVisible] = useState(false)

  const visibileWindow = value => {
    console.log(value)
    setModeVisible(value)
  }

  return (
    <>
      <div className='HeaderPanel'>
          <img src={imgLogo} className='Logo' alt='logo'></img>
          <p className='NameMarket'>Интернет-магазин "LEGO". Время работы: 09.00 - 20.00. Тел: +375291448698</p>
          <span className="Cabinet material-symbols-outlined" onClick={() => visibileWindow(true)}>person</span>
      </div>
      {
        modeVisible && <Auth cbVisibileWindow={visibileWindow}/>
      }
    </>
  )
}
