import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CharacterList from "./pages/CharacterList.jsx";
import CharacterForm from "./pages/CharacterForm.jsx";
import Signin from "./pages/Signin.jsx";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signin />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },

  {
    path: "/character",
    element: <CharacterForm />,
  },
  {
    path: "/list",
    element: <CharacterList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
