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

function App() {
  function Layout() {
    const { isDarkMode } = useDarkModeContextValue(); //contextValue
    console.log("isDarkMode", isDarkMode);
    return (
      <UserContextProvider>
        <AuthProvider>
          <ProtectedRoute>
            <div className={isDarkMode ? "darkMode" : "lightMode"}>
              <Navbar />
              <div className="left-center-right">
                <LeftBar />
                <div style={{ flex: 6 }}>
                  <Outlet />
                </div>
                <RightBar />
              </div>
            </div>
          </ProtectedRoute>
        </AuthProvider>
      </UserContextProvider>
    );
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <DarkModeContextProvider>
          {" "}
          <Layout />{" "}
        </DarkModeContextProvider>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id", element: <Profile /> },
      ],
    },

    {
      path: "/signin",
      element: (
        <UserContextProvider>
          <AuthProvider>
            <ProtectedRoute isProtectionRequired={false}>
              <SignIn />
            </ProtectedRoute>
          </AuthProvider>
        </UserContextProvider>
      ),
    },
    {
      path: "/signup",
      element: (
        <AuthProvider>
          <UserContextProvider>
            <ProtectedRoute isProtectionRequired={false}>
              <SignUp />
            </ProtectedRoute>
          </UserContextProvider>
        </AuthProvider>
      ),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
