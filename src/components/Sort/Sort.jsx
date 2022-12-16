import React, { useRef } from 'react'
import './Sort.scss'
import { clientEvents } from '../../events'

export const Sort = props => {

  const selectRef = useRef('name-up')
  
  const sortObj = eo => {
    const obj = {
      sort: eo.target.value
    }
    clientEvents.emit("setSortObj", obj)
  }
	

  return (
    <div className='Sort'>
      <select onChange={sortObj} className='Select' ref={selectRef}>
            <option value="name-up">По названию товара, A-Я</option>
            <option value="name-down">По названию товара, Я-А</option>
            <option value="price-up">По цене, возрастание</option>
            <option value="price-down">По цене, убывание</option>
      </select>
    </div>
  )
}
