import React, { useCallback, useState } from "react";
import axios from "axios";
import { registerApiCall } from "../../../api/apiCall";
import { ROUTE_REGISTER } from "../../../config/Constants";
import XTextField from "../../../x-lib/x-components/x-form-controls/XTextField";
interface Props {
  onViewChange?: (n: number) => void;
}
interface State {
  email: string;
  password: string;
  hasError?: boolean;
  errorMessage?: string;
}
const initialState: State = {
  email: "",
  password: "",
  errorMessage: "",
};
const SignUpView: React.FC<Props> = (props):JSX.Element => {
  const { onViewChange } = props;
  const [state, setState] = useState<State>(initialState);
  //const [email, setEmail] = useState<string>("");
  const handleEmailChange = useCallback((val: string) => {
    setState((state: Readonly<State>) => ({
      ...state,
      email: val,
    }));
  },[state.email]);

  const handlePasswordChange = useCallback((val: string) => {
    setState((state: Readonly<State>) => ({
      ...state,
      password: val,
    }));
  },[state.password]);
  const onSubmitSignUp = (e: any) => {
    e.preventDefault();
    const data = {
      email: state.email,
      password: state.password,
    };

    if (!data.email || !data.password) {
      setState((state) => ({
        ...state,
        errorMessage: "required email and password",
      }));

      return;
    }
    registerApiCall(ROUTE_REGISTER, data)
      .then((res) => {
        console.log(res)
        setState(state => ({
          ...state,
          email: "",
          password: "",
          errorMessage: ""
        }))
      })
      .catch((err) => {
        console.log(err)
        setState(state => ({
          ...state,
          email: "",
          password: "",
          errorMessage: ""
        }))
      });
  }


  const Error = (): JSX.Element => {
    return (
      <div className="alert alert-danger" role="alert" style={{ width: "516px", margin: "20px auto 0 auto" }}>
        {state.errorMessage}
      </div>
    );
  }

    return (
      <div>
        <div> email: "eve.holt@reqres.in"<span style={{paddingRight: "20px"}}></span> password: "pistol" </div>
        {state.errorMessage && <Error />}

        <form className="form-inline">
          <div className="form-group">
            <XTextField
              label="email"
              placeholder="E-Posta"
              value={state.email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="form-group my-sm-3">
          <XTextField
              type="password"
              label="password"
              placeholder="Şifre"
              value={state.password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={onSubmitSignUp}
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

export default SignUpView;
