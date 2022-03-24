import React  from "react";
import {connect} from "react-redux";
import { userInitAction, userLoginSuccessAction } from "../../../redux/user-redux/actionCreator";
import { IUser } from '../../../models/user';
import { loginApiCall } from "../../../api/apiCall";
import { ROUTE_LOGIN } from "../../../config/Constants";
import { setDataToStorage } from "../../../shared/storage/Storage";
import { Navigate } from "react-router";
//import { useNavigate } from "react-router";
import { Dispatch } from "redux";
interface Props {
  onViewChange: (n: number) => void;
  userInit?: (user: IUser) => void;
  userLoginSuccessAction: (user: {email: string , password: string}) => void
}

interface State {
  email: string;
  password: string;
  hasError?: boolean;
  errorMessage?: string;
}
class LoginView extends React.Component<Props , State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
      errorMessage: "",
    };
  }

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((state: Readonly<State>) => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }
  onUserClick() {
    // HTTP Call
    const data = {email: this.state.email , password: this.state.password}
    try{
      this.props.userLoginSuccessAction(data);
      <Navigate to = '/' />
      this.setState( (state)=>({
        ...state,
        email: "",
        password: ""
      })) 
    }
    catch(err){
      this.setState( (state)=>({
        ...state,
        errorMessage: err as string
      }))
    }
    userLoginSuccessAction(data)
    //this.props.userInit(user)
  }
  public renderErrors(): JSX.Element {
    return (
      <div className="alert alert-danger" role="alert" style={{ width: "516px", margin: "20px auto 0 auto" }}>
        {this.state.errorMessage}
      </div>
    );
  }
  render() {
    const onViewChange = this.props.onViewChange;
    const Error = this.renderErrors.bind(this);
      return (
        <div>
          <div> email: "eve.holt@reqres.in"<span style={{paddingRight: "20px"}}></span> password: "cityslicka" </div>
        {this.state.errorMessage && <Error />}
          <form className="form-inline">
            <div className="form-group">
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="E-Posta"
                value={this.state.email}
                onChange = {this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group my-sm-3">
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Şifre"
                value={this.state.password}
                onChange = {this.handleChange.bind(this)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onUserClick.bind(this)}
            >
              Giriş Yap
            </button>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewChange(3);
              }}
            >
              Şifremi Unuttum!
            </a>
          </form>

          <p>
            Henüz üye olmadınız mı? <br />
            Ücretsiz kayıt olmak için{" "}
            <b>
              <u>
                <a
                  style={{ fontSize: "18px" }}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onViewChange(2);
                  }}
                >
                  tıklayınız.
                </a>
              </u>
            </b>
          </p>
        </div>
      );
    }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    userLoginSuccessAction: async (user: {email: string, password: string}) => {
      await dispatch( userLoginSuccessAction({email: user.email, password: user.password}) )
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginView);
