import { ThemeProvider } from "../ThemeContext";
import UserContextProvider from "../user-context/UserContext";
import Container from "./container/Container";
const ParentApp = () => {
  return (
    <ThemeProvider>
      <UserContextProvider>
        <Container />
      </UserContextProvider>
    </ThemeProvider>
  );
};

export default ParentApp;
