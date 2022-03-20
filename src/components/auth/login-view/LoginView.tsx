import React from "react";

interface Props {
  onViewChange: (n: number) => void;
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

  onUserClick() {
    // HTTP Call
  }

  render() {
    const onViewChange = this.props.onViewChange;

      return (
        <div>
          <form className="form-inline">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="E-Posta"
              />
            </div>
            <div className="form-group my-sm-3">
              <input
                type="password"
                className="form-control"
                placeholder="Şifre"
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

export default LoginView;
