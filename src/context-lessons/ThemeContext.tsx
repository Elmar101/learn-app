import { createContext, useContext, useState } from "react";

interface IThemeProvider {
  children?: React.ReactNode;
}

export interface IStateContext {
  type: string
  background: string;
  color: string;
  height: string;
} 
export const lightTheme: IStateContext = {
  type: 'light',
  background: '#fff',
  color: 'black',
  height: '100vh'
}

export const darkTheme: IStateContext = {
  type: 'dark',
  background: 'black',
  color: '#fff',
  height: '100vh'
}
const ThemeContextState = createContext<IStateContext>(lightTheme);

const ThemeContextSetState = createContext<React.Dispatch<React.SetStateAction<IStateContext>> | undefined>(undefined);

export const useStateThemeContext = () => {
  const state = useContext(ThemeContextState);
  if (!state) {
    throw new Error("useStateThemeContext was called outside of the ThemeContextState provider");
  }
  return state;
};

export const useSetStateThemeContext = () => {
  const useSetStateThemeContext = useContext(ThemeContextSetState);
  if (!useSetStateThemeContext) {
    throw new Error("useSetStateThemeContext was called outside of the ThemeContextSetState provider");
  }
  return useSetStateThemeContext;
};

export const ThemeProvider: React.FC<IThemeProvider> = (props) => {
  const { children } = props;
  const [state, setState] = useState<IStateContext>(lightTheme);

  return (
    <ThemeContextState.Provider value={state}>
      <ThemeContextSetState.Provider value={setState}>
        {children}
      </ThemeContextSetState.Provider>
    </ThemeContextState.Provider>
  );
};
