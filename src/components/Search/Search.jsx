import React, { useRef, useEffect } from 'react'
import './Search.scss'
import { Link } from 'react-router-dom';
import { clientEvents } from '../../events';

export const Search = () => {

  const textRef = useRef();

  const search = () => {
    console.log(textRef.current.value)
    clientEvents.emit('searchWithText')
  }

  return (
    <div to="/catalog" className='SearchBlock'>
      <div className='SearchOpen'>
        <input className='Text' type="text" ref={textRef}/>
        <Link to="/catalog" className="Search material-symbols-outlined" onClick={search}>search</Link>
      </div>
    </div>
  )
}
