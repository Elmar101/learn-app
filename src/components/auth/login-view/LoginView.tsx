import React from "react";
import {connect} from "react-redux";
import { userInitAction } from "../../../redux/user-redux/actionCreator";
import { IUser } from '../../../models/user';
import { Dispatch } from "redux";

interface Props {
  onViewChange: (n: number) => void;
  userInit: (user: IUser) => void
}

interface State {
  email: string;
  password: string;
}
class LoginView extends React.Component<Props , State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
    const user: IUser =  {
      id: 1,
      name: "Elmar",
      email: "elmar@mail.ru",
      password: "12345"
    }

    this.props.userInit(user)
  }

  render() {
    const onViewChange = this.props.onViewChange;

      return (
        <div>
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    userInit: (user: IUser) => {
      dispatch( userInitAction(user) )
    }
  }
}

export default connect(null, mapDispatchToProps)(LoginView);
