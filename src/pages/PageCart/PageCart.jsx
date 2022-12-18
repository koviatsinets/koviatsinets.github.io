import React from 'react'
import { useSelector } from 'react-redux';
import './PageCart.scss'

import CartItem from '../../components/CartItem/CartItem'

export const PageCart = () => {

  const market = useSelector( state => state.market );
  
  const itemsCode = market.cart.map(el => {
    return <CartItem key={el.id} product={el}></CartItem>
  })
  
  return (
    <div className='PageCart'>
      { market.cart.length > 0?
      <div className='Order'>
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
                  <th>{'Удалить из корзины'}</th>
                </tr>
              </thead>
            <tbody>{itemsCode}</tbody>
          </table>
        </div>
        <div className='Delivery'>
         <div className='Row'>
          <p>Фамилия</p>
          <input type='text'></input>
         </div>
         <div className='Row'>
          <p>Имя</p>
          <input type='text'></input>
         </div>
         <div className='Row'>
          <p>Отчество</p>
          <input type='text'></input>
         </div>
         <div className='Row'>
          <p>Город</p>
          <input type='text'></input>
         </div>
         <div className='Row'>
          <p>Улица</p>
          <input type='text'></input>
         </div>
         <div className='Row'>
          <p>Дом</p>
          <input type='number'></input>
         </div>
         <div className='Row'>
          <p>Квартира</p>
          <input type='number'></input>
         </div>
         <div className='Row'>
          <p>Подъезд</p>
          <input type='number'></input>
         </div>
         <div className='Row'>
          <p>Этаж</p>
          <input type='number'></input>
         </div>
        </div>
        <input type='button' className='Button' value={'Заказать товар'}/>
      </div>
      :
      <div className='CartEmpty'>Корзина товаров пуста</div>
      }
    </div>
  )
}
