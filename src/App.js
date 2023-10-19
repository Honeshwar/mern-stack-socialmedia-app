import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  // useNavigate,
} from "react-router-dom";
import { LeftBar, Navbar, RightBar } from "./components";
import { Home, Profile, SignIn, SignUp } from "./pages";

function App() {
  const currentUser = true;
  const ProtectedRoute = ({ children }) => {
    // const navigate = useNavigate();
    if (!currentUser) {
      return <Navigate to="/signin" />;
    }
    return children;
  };
  const ProtectedRoute2 = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" />;
    }
    return children;
  };
  function Layout() {
    return (
      <div className="layout">
        <Navbar />
        <div className="left-center-right">
          <LeftBar />
          <div>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id", element: <Profile /> },
      ],
    },

    { path: "/signin", element: <ProtectedRoute2><SignIn /></ProtectedRoute2> },
    { path: "/signup", element: <ProtectedRoute2><SignUp /></ProtectedRoute2> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
