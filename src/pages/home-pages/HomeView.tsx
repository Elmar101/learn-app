import AuthView from "../../components/auth/AuthView";
import { XDropDownLink } from "../../x-lib/x-components/x-form-controls/XSelect/XDropDownLink";
interface Props {
  children: React.ReactNode
}
export const HomeView: React.FC<Props> = ({children}) => {
  return (
    <div className="home-container">
      <div style={{ float: "right" }}>
        <XDropDownLink
          value={[
            { index: 1,  path:"login" },
            { index: 2,  path:"register"},
            { index: 3,  path:"password-reset"},
          ]}
        />
      </div>
      <div className="container">
        <h1>
          Muellimler üÇün <br />
        </h1>
        {children}
      </div>
    </div>
  );
};

export default HomeView;
