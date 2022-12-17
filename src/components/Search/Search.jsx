import React, { useRef } from 'react'
import './Search.scss'
import { clientEvents } from '../../events';

export const Search = () => {

  const textRef = useRef();

  const search = () => {
    clientEvents.emit('searchWithText', textRef.current.value)
  }

  const clear = () => {
    textRef.current.value = ''
    clientEvents.emit('searchWithText', textRef.current.value)
  }

  return (
    <div to="/catalog" className='SearchBlock'>
      <div className='SearchOpen'>
        <input className='Text' type="text" ref={textRef} onChange={search}/>
        <span className="Search material-symbols-outlined" onClick={clear}>close</span>
      </div>
    </div>
  )
}
