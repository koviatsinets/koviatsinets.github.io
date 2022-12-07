import React from 'react'
import './Card.scss'

export const Card = props => {

  return (
    <div className='Card'>
        <img src={props.product.img} className='Img' alt='logo'></img>
        <p className='Name'>{props.product.productName}</p>
        <p className='Price'>Стоимость: {props.product.price}</p>
        <button className='Button'>Добавить в корзину</button>
    </div>
  )
}
