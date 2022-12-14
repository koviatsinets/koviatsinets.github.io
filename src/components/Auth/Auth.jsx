import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import './Auth.scss'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../redux/userSlice'

export const Auth = props => {


    const dispatch = useDispatch()

    const emailRef = useRef()
    const passwordRef = useRef()

    const authorization = async () => {
        const auth = getAuth()
        try {
            const answer = await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            props.cbVisibileWindow(false)
            dispatch(setUser({
                        email: answer.user.email,
                        id: answer.user.uid,
                        token: answer.user.accessToken,
            }))
        } catch(e) {
            console.log(e.code)
        }
       

        
        
        // .then(({user}) => {
        //     props.cbVisibileWindow(false)
        //     dispatch(setUser({
        //         email: user.email,
        //         id: user.uid,
        //         token: user.accessToken,
        //     }))
        // })
        // .catch((error) => {
        //     if (error) {
        //         console.log('err')
        //     }
        //     // const errorCode = error.code;
        //     // console.log(errorCode)
        //     // const errorMessage = error.message;
        //     // console.log(errorMessage)
        //   });
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
                <input className='ButtonLogin' type='button' value='Register' />
            </div>
        </div>
    </div>
  )
}
