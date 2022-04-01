import { createContext, useContext, useState } from "react";

interface IThemeProvider {
  children?: React.ReactNode;
}

const ThemeContextState: React.Context<string> = createContext<string>("");

const ThemeContextSetState = createContext<React.Dispatch<React.SetStateAction<string>> | undefined>(undefined);

export const useStateThemeContext = () => {
  const state = useContext(ThemeContextState);
  if (!state) {
    throw new Error(
      "useStateThemeContext was called outside of the ThemeContextState provider"
    );
  }
  return state;
};

export const useSetStateThemeContext = () => {
  const useSetStateThemeContext = useContext(ThemeContextSetState);
  if (!useSetStateThemeContext) {
    throw new Error(
      "useSetStateThemeContext was called outside of the ThemeContextSetState provider"
    );
  }
  return useSetStateThemeContext;
};

export const ThemeProvider: React.FC<IThemeProvider> = (props) => {
  const { children } = props;
  const [state, setState] = useState("dark");

  return (
    <ThemeContextState.Provider value={state}>
      <ThemeContextSetState.Provider value={setState}>
        {children}
      </ThemeContextSetState.Provider>
    </ThemeContextState.Provider>
  );
};
