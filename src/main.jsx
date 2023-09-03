import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LoginView from "./views/LoginView.jsx";
import DashboardView from './views/DashboardView.jsx'
import NewJobView from './views/NewJobView.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={<App />}>
        <Route path="login" element={<LoginView />} />
        <Route path="dashboard" element={<DashboardView />} />
        <Route path="new-job" element={<NewJobView />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
