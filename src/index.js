import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./components/Auth/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);