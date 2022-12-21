import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import './Auth.scss'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../redux/userSlice'

export const Auth = props => {

    const dispatch = useDispatch()

    const emailRef = useRef()
    const passwordRef = useRef()

    const authorization = () => {
       
    }
    const registration = () => {
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then(({user}) => {
            console.log(user)
        })
        .catch(console.error)
    }

  return (
    <div className='Auth'>
        <div className='Window'>
            <input className='ButtonClose' type='button' value='x' onClick={() => props.cbVisibileWindow(false)}/>
            <div className='Block'>
                <div className='Row'>
                    <p>Login</p>
                    <input type="text" ref={emailRef} />
                </div>
                <div className='Row'>
                    <p>Password</p>
                    <input type="text" ref={passwordRef} />
                </div>
            </div>
            <div>
                <input className='ButtonLogin' type='button' value='Login' onClick={authorization}/>
                <input className='ButtonLogin' type='button' value='Register' onClick={registration}/>
            </div>
        </div>
    </div>
  )
}
