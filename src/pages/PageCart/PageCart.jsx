import React from 'react'
import { useSelector } from 'react-redux';
import './PageCart.scss'

import { CartItem } from '../../components/CartItem/CartItem'

export const PageCart = () => {

  const market = useSelector( state => state.market );

  console.log(market.cart)

  const itemsCode = market.cart.map(el => {
    console.log(el)
    return <CartItem key={el.id} product={el}></CartItem>
  }
  )
  
  return (
    <div className='PageCart'>
      <p className='Title'>Оформление заказа</p>
      <div className='Cart'>
        <table>
            <thead>
              <tr>
                <th>{'Изображение'}</th>
                <th>{'Название'}</th>
                <th>{'Возраст'}</th>
                <th>{'Кол-во деталей'}</th>
                <th>{'Стоимость'}</th>
                <th>{'Удалить'}</th>
              </tr>
            </thead>
          <tbody>{itemsCode}</tbody>
        </table>
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
