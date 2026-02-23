import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRouter";
import "./styles/index.css"
import { EditProvider } from "./editable/context/EditContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EditProvider>
    <RouterProvider router={router} />
    </EditProvider>
  </React.StrictMode>
);