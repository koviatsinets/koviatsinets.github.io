import React, { useState } from 'react'
import { deleteFromCart } from '../../redux/productsSlice';
import { useDispatch } from 'react-redux';
import './CartItem.scss'

const CartItem = React.memo(function CartItem(props) {

  const [opacityMode, setOpacityMode] = useState(1)
  const dispatch = useDispatch();

  const deleteItem = () => {
    setOpacityMode(0)
    setTimeout(() => {
      dispatch(deleteFromCart(props.product.id))
    }, 500)
    
  }

  return (
    <tr className='CartItem' style={{opacity: opacityMode}}>
      <td>
        <img className='Img' src={props.product.img} alt='img'/>
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
})

export default CartItem