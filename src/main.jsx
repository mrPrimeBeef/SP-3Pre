import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./global.css";
import { ThemeProvider } from "./util/ThemeContext";

// pages
import App from "./App";
import About from "./pages/About";
import Home from "./pages/Home";
import Endpoints from "./pages/Endpoints";
import ErrorPage from "../error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "endpoints",
        element: <Endpoints />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
