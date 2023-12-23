import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes/Routes.jsx";
import AuthProvider from "./Contexts/AuthProvider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div>
        <RouterProvider router={routes} />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
