import { ThemeProvider } from "../ThemeContext";
import Container from "./container/Container";
const ParentApp = () => {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
};

export default ParentApp;
