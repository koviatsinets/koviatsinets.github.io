import React from 'react'

export const Pagination = () => {

const decreaseIndex = () => {

}

const increaseIndex = () => {
    
}

const setIndex = () => {
    
}

  return (
    <div className='ButtonPaginationBlock'>
        <button onClick={decreaseIndex}>&lt;</button>
        <button onClick={setIndex} value='1'>1</button>
        <button onClick={setIndex}>2</button>
        <button onClick={increaseIndex}>&gt;</button>
    </div>
  )
}
