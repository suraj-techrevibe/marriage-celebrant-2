
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRouter";
import "./styles/index.css"
import "./styles/animation.css"
import React from "react";
import SEO from "./components/SEO";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <HelmetProvider>
  <SEO />
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);