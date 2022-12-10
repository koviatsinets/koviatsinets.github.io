import React from 'react'
import { useSelector } from 'react-redux';
import './PageCart.scss'

export const PageCart = () => {
  
  return (
    <div className='PageCart'>
      <p className='Title'>Оформление заказа</p>
      <div className='InCart'>
        товары в корзине
      </div>
      <div className='Delivery'>
        доставка
      </div>
      <div className='Pay'>
        оплата
      </div>
      <input type='button' />
    </div>
  )
}
