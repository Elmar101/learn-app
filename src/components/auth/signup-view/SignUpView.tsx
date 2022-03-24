import React from "react";
import axios from "axios";
import { registerApiCall } from "../../../api/apiCall";
import { ROUTE_REGISTER } from "../../../config/Constants";
interface Props {
  onViewChange?: (n: number) => void;
}
interface State {
  email: string;
  password: string;
  hasError?: boolean;
  errorMessage?: string;
}

class SignUpView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: "",
    };
  }

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((state: Readonly<State>) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  public onSubmitSignUp(e: any) {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };

    if (!data.email || !data.password) {
      this.setState((state) => ({
        ...state,
        errorMessage: "required email and password",
      }));

      return;
    }
    registerApiCall(ROUTE_REGISTER, data)
      .then((res) => {
        console.log(res)
        this.setState(state => ({
          ...state,
          email: "",
          password: "",
          errorMessage: ""
        }))
      })
      .catch((err) => {
        console.log(err)
        this.setState(state => ({
          ...state,
          email: "",
          password: "",
          errorMessage: ""
        }))
      });
  }


  public renderErrors(): JSX.Element {
    return (
      <div className="alert alert-danger" role="alert" style={{ width: "516px", margin: "20px auto 0 auto" }}>
        {this.state.errorMessage}
      </div>
    );
  }
  render() {
    const { onViewChange } = this.props;
    const Error = this.renderErrors.bind(this);
    return (
      <div>
        <div> email: "eve.holt@reqres.in"<span style={{paddingRight: "20px"}}></span> password: "pistol" </div>
        {this.state.errorMessage && <Error />}

        <form className="form-inline">
          <div className="form-group">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="E-Posta"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group my-sm-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Şifre"
              value={this.state.password}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onSubmitSignUp.bind(this)}
          >
            Kayıt Ol!
          </button>
        </form>

        <p>
          Zaten üye misiniz? <br />O zaman giriş yapmak için{" "}
          <b>
            <u>
              <a
                style={{ fontSize: "18px" }}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onViewChange && onViewChange(1);
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

export default SignUpView;
