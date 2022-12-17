import React from 'react'
import { addInCart } from '../../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import './Card.scss'

const Card = React.memo(function Card(props) {

  const market = useSelector( state => state.market );
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addInCart(props.product))
  }

  const inCart = market.cart.find(el => el.id === props.product.id)
  var classNameStyle = inCart? 'Card Checked' : 'Card';
console.log('Рендер <Card />')
  return (
    <div className={classNameStyle}>
        <img src={props.product.img} className='Img' alt='logo'></img>
        <p className='Name'>{props.product.prodName}</p>
        <p>Возраст: с {props.product.age} лет</p>
        <p className='Details'>Детали: {props.product.details}</p>
        <p className='Price'>Стоимость: {props.product.price} руб.</p>
        { inCart?
          <div className='ThisProductInCart'>В корзине</div>
        :
          <button className='Button' onClick={add}>Добавить в корзину</button>
        }
    </div>
  )
});

export default Card;