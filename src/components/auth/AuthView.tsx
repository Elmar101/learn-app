import React, { Component } from 'react';
import LoginView from './login-view/LoginView';
import SignUpView from './signup-view/SignUpView';
import PasswordReset from './password-reset-view/PasswordResetView';
interface Props {

}
interface State {
    currentView: number 
}
class AuthView extends Component<Props , State> {

    constructor(props: any) {
        super(props);

        // 1: Giriş Ekranı
        // 2. Kayıt Ekranı
        // 3. Şifre reset ekranı

        this.state = {
            currentView: 1
        }
    }


    changeView(newView: number){        
        this.setState({
            currentView : newView
        })
    }


    render() {

        return this.state.currentView  === 1
                        ? <LoginView onViewChange={this.changeView.bind(this)} />
                        : this.state.currentView === 2 
                        ? <SignUpView onViewChange={this.changeView.bind(this)} />
                        : <PasswordReset onViewChange={this.changeView.bind(this)} />

    }
}

export default AuthView;