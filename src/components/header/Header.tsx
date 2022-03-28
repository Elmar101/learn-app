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
                <nav className="d-flex container navbar navbar-expand-lg justify-content-between">
                    <XLink className="navbar-brand" to="/">LEARNKOD</XLink>
                    
                    <button className="navbar-toggler" type="button" onClick={this.buttonClicked.bind(this)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" style={{ display: this.state.isNavOpen ? "block" : "none" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <XLink activeclassname="active" to="/"  className="nav-link">HOME</XLink>
                            </li>
                            <li className="nav-item">
                                <XLink activeclassname="active" to="/hakkimizda"  className="nav-link">ABBOUT US</XLink>
                            </li>
                            <li className="nav-item">
                                <XLink activeclassname="active" to="/iletisim"  className="nav-link">CONTACT</XLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </header>
        )
    }
}

export default Header;