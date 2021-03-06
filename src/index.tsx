import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import reportWebVitals from "./reportWebVitals";
import "./bootstrap-overwride.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.scss";
import "./reset.scss";
import 'antd/dist/antd.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthUserContextProvider } from "./ecommerce-app/client/contexts/AuthContext";
import BasketContextProvider from "./ecommerce-app/client/contexts/BasketContext";
const queryClient: QueryClient = new QueryClient({
  defaultOptions:{
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  }
});
/* ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
); */
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthUserContextProvider>
        <BasketContextProvider>
          <App />
        </BasketContextProvider>
      </AuthUserContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
