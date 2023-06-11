import React from "react";
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from "./context/AuthContext";
import { AppProvider } from "./context/AppContext.js";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthContextProvider>
  </React.StrictMode>
);