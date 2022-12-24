import React, { useRef } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { useSelector, useDispatch } from 'react-redux';
import { updateProducts } from '../../redux/productsSlice';

import './AddProduct.scss';

export const AddProduct = () => {
        
    const market = useSelector( state => state.market );
    const dispatch = useDispatch()

    const nameRef = useRef('')
    const themeRef = useRef('')
    const ageRef = useRef('')
    const detailsRef = useRef('')
    const priceRef = useRef('')
    const imgUrlRef = useRef('')

    const addNewProduct = async () => {
        const maxInd = [...market.products].sort((a,b) => b.id - a.id)[0].id + 1
        const newObj = {
            id: maxInd,
            theme: themeRef.current.value,
            prodName: nameRef.current.value,
            age: Number(ageRef.current.value),
            details: Number(detailsRef.current.value),
            price: Number(priceRef.current.value),
            img: imgUrlRef.current.value
        }
        const db = getDatabase()
        set(ref(db, 'products/' + maxInd), newObj);
        dispatch(updateProducts(newObj))
    }

  return (
      <div className='AddProduct'>
        <p className='Title'>Добавить новый продукт</p>
        <div className='Row'>
          <p className='Text'>Название:</p>
          <input className='Input' ref={nameRef}></input>
        </div>
        <div className='Row'>
          <p className='Text'>Тема:</p>
          <input className='Input' ref={themeRef}></input>
        </div>
        <div className='Row'>
          <p className='Text'>Возраст:</p>
          <input className='Input' ref={ageRef}></input>
        </div>
        <div className='Row'>
          <p className='Text'>Кол-во деталей:</p>
          <input className='Input' ref={detailsRef}></input>
        </div>
        <div className='Row'>
          <p className='Text'>Стоимость:</p>
          <input className='Input' ref={priceRef}></input>
        </div>
        <div className='Row'>
          <p className='Text'>URL изображения:</p>
          <input className='Input' ref={imgUrlRef}></input>
        </div>
        <input type='button' className='Button' value={'Добавить'} onClick={addNewProduct}></input>
      </div>
  )
}