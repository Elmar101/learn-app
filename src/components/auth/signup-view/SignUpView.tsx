import React from 'react';
interface Props {
    onViewChange: (n: number)=> void
}
interface State {}

class SignUpView extends React.Component<Props , State> {

    constructor( props: Props ) {
        super(props);

        this.state = {
            email: "",
            password: "",
            hasError: false,
            errorMessage: ""
        }
    }

    

  
    render() {
        const { onViewChange } = this.props;

        return (
            <div>
                <form className="form-inline">
                    <div className="form-group">
                        <input type="text" name="email" className="form-control" placeholder="E-Posta"  />
                    </div>
                    <div className="form-group my-sm-3">
                        <input type="password" name="password" className="form-control" placeholder="Şifre" />
                    </div>
                    <button type="submit" className="btn btn-primary">Kayıt Ol!</button>
                </form>

                <p>
                    Zaten üye misiniz? <br />
                    O zaman giriş yapmak için <b><u><a style={{ fontSize: "18px" }} href="#" onClick={e => {
                        e.preventDefault();
                        onViewChange(1);
                    }}>tıklayınız.</a></u></b>
                </p>
            </div >
        )
    }

}


export default SignUpView;