import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  // useNavigate,
} from "react-router-dom";
import { LeftBar, Navbar, RightBar } from "./components";
import AuthProvider from "./context/authContext";
import {
  DarkModeContextProvider,
  useDarkModeContextValue,
} from "./context/darkModeContext";
import { Home, Profile, SignIn, SignUp } from "./pages";
import ProtectedRoute from "./ProtectedRoute";
import UserContextProvider from "./context/userContext";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// router code
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <ProtectedRoute isProtectionRequired={true}>
          {/* // protect app */}
          <App />
        </ProtectedRoute>
      </AuthProvider>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile/:id", element: <Profile /> },
    ],
  },

  {
    path: "/signin",
    element: (
      <AuthProvider>
        <ProtectedRoute isProtectionRequired={false}>
          <SignIn />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
  {
    path: "/signup",
    element: (
      <AuthProvider>
        <ProtectedRoute isProtectionRequired={false}>
          <SignUp />
        </ProtectedRoute>
      </AuthProvider>
    ),
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

//test karanga
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
