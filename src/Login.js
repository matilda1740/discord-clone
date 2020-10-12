import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

export default function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .catch( error => alert(error.message))
    }; 

    return (
        <div className="login">
            
            <div className="login__logo">
                <img src="https://download.logo.wine/logo/Discord_(software)/Discord_(software)-Logo.wine.png" alt=""/>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}
