import { Button } from '@mui/material'
import React from 'react'
import { auth, provider } from './firebase'
import './Login.css'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
const [{}, dispatch] = useStateValue();

    const signIn = () => {
     auth
     .signInWithPopup(provider)
     .then((result)=>{
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })
     })
     .catch((error)=>alert(error.message));
    }

  return (
    <div className='login'>
        <div className='login-container'>
            <img src='https://static.whatsapp.net/rsrc.php/ym/r/36B424nhiL4.svg' alt=""/>

            <div className='login-text'>
                <h2>Sign in to Whatsapp</h2>
            </div>

            <Button type="submit" onClick={signIn}>
                Sign In with Google
            </Button>
        </div>
    </div>
  )
}

export default Login