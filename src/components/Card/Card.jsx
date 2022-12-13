import React from 'react'
import { addInCart } from '../../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Card.scss'

export const Card = props => {

  const dispatch = useDispatch();

  const add = () => {
    dispatch(addInCart(props.product.id))
  }

  return (
    <div className='Card'>
        <img src={props.product.img} className='Img' alt='logo'></img>
        <p className='Name'>{props.product.prodName}</p>
        <p>Возраст: {props.product.age}</p>
        <p className='Details'>Детали: {props.product.details}</p>
        <p className='Price'>Стоимость: {props.product.price}</p>
        <button className='Button' onClick={add}>Добавить в корзину</button>
    </div>
  )
}
