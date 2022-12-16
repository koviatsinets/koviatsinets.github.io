import React from 'react'
import { deleteFromCart } from '../../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import './CartItem.scss'

export const CartItem = props => {

  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteFromCart(props.product.id))
  }

  return (
    <tr className='CartItem'>
      <td>
        <img className='Img' src={props.product.img}></img>
      </td>
      <td>{props.product.prodName}</td>
      <td>с {props.product.age} лет</td>
      <td>{props.product.details}</td>
      <td>{props.product.price} руб.</td>
      <td>
        <input type='button' onClick={deleteItem} value='Удалить'/>
      </td>
    </tr>
  )
}
