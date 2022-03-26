import React, { Component, useState } from 'react';
import LoginView from './login-view/LoginView';
import SignUpView from './signup-view/SignUpView';
import PasswordReset from './password-reset-view/PasswordResetView';
interface Props {}

const AuthView: React.FC<Props> = () => {
    const [state, setState] = useState<number>(1);

    const changeView = (newView: number): void => {        
        setState(newView)
    }

    return state  === 1
                    ? <LoginView onViewChange={changeView} />
                    : state === 2 
                    ? <SignUpView onViewChange={changeView} />
                    : <PasswordReset onViewChange={changeView} />

    
}

export default AuthView;