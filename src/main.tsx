
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRouter";
import "./styles/index.css"
import "./styles/animation.css"
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  
      
    <RouterProvider router={router} />
   
  </React.StrictMode>
);