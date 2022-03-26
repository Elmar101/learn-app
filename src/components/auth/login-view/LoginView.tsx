import React, { useCallback, useEffect, useRef, useState } from "react";
import { userLoginSuccessAction } from "../../../redux/user-redux/actionCreator";
import { IUser } from "../../../models/user";
import { Navigate } from "react-router";
import XTextField from "../../../x-lib/x-components/x-form-controls/XTextField";
import { useDispatch } from "react-redux";
interface Props {
  onViewChange?: (n: number) => void;
  userInit?: (user: IUser) => void;
}

interface State {
  email: string;
  password: string;
  hasError?: boolean;
  errorMessage?: string;
}

const initialValue = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
  errorMessage: "",
};
const LoginView: React.FC<Props> = (props) => {
  const { onViewChange } = props;
  const [state, setState] = useState(initialValue);
  const mountedRef = useRef(true);
  const dispatch = useDispatch();
  const handleEmailChange = useCallback(
    (val: string) => {
      setState((state) => ({
        ...state,
        email: val,
      }));
    },
    [state.email]
  );

  const handlePasswordChange = useCallback(
    (val: string) => {
      setState((state) => ({
        ...state,
        password: val,
      }));
    },
    [state.password]
  );

  const  onUserClick = useCallback( async () =>  {
    // HTTP Call
    const data = {email: state.email , password: state.password}
    try{
      await dispatch(userLoginSuccessAction(data));
      <Navigate to = '/' />
      setState( (state)=>({
        ...state,
        email: "",
        password: ""
      })) 
    }
    catch(err){
      setState( (state)=>({
        ...state,
        errorMessage: err as string
      }))
    }
  },[mountedRef] )
  
  useEffect(()=>{
    onUserClick();
    return ()=> {
      mountedRef.current = false;
    };
  },[onUserClick]); 
  
  const Error = (): JSX.Element => {
    return (
      <div
        className="alert alert-danger"
        role="alert"
        style={{ width: "516px", margin: "20px auto 0 auto" }}
      >
        {state.errorMessage}
      </div>
    );
  };

  return (
    <div>
      <div>
        email: "eve.holt@reqres.in"
        <span style={{ paddingRight: "20px" }}></span> password: "cityslicka"{" "}
      </div>
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
        <button type="button" className="btn btn-primary" onClick = {onUserClick} >
          Giriş Et
        </button>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onViewChange && onViewChange(3);
          }}
        >
          Şifremi Unuttum!
        </a>
      </form>

      <p>
        Hələdə üye deyilsiniz? <br />
        pulsuz registir olmak üçün
        <b>
          <u>
            <a
              style={{ fontSize: "18px" }}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewChange && onViewChange(2);
              }}
            >
              kilik edin.
            </a>
          </u>
        </b>
      </p>
    </div>
  );
};

export default LoginView;

