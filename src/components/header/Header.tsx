import React from 'react';
import { XLink } from '../../x-lib/x-components/x-customLink/XLink';

interface Props {
    children?: React.ReactNode
}
interface State{
    isNavOpen: boolean  
}
class Header extends React.Component<Props,State> {

    public state = {
        isNavOpen : false
    }
    
    buttonClicked(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }


    render() {
        return (
            <header>
                <nav className="container navbar navbar-expand-lg justify-content-between">
                    <XLink className="navbar-brand" to="/">EĞİTİMBUDUR</XLink>
                    <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" style={{ display: this.state.isNavOpen ? "block" : "none" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <XLink to="/"  className="nav-link">Ana Sayfa</XLink>
                            </li>
                            <li className="nav-item">
                                <XLink to="/hakkimizda"  className="nav-link">Hakkımızda</XLink>
                            </li>
                            <li className="nav-item">
                                <XLink to="/iletisim"  className="nav-link">İletişim</XLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </header>
        )
    }
}

export default Header;