import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./assets/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styleTheme";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { expensesApiSlice } from "./api/ExpensesApiSlice";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <ApiProvider api={expensesApiSlice}>
          <App />
        </ApiProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
