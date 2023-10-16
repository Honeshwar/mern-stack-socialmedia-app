import {createBrowserRouter, Outlet, RouterProvider, useNavigate} from "react-router-dom";
import {Home, Profile, SignIn, SignUp} from "./pages";


function App() {
  const navigate = useNavigate();
  const currentUser = false;
  const ProtectedRoute = ({children})=>{
    if(!currentUser){
      navigate('/signin');
    }
    return children;
  }
    function Layout(){
    return (
      <div >
      <Navbar />
      <div >
        <LeftBar />
        <div >
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>

    )
    }
const router = createBrowserRouter([
  {path:'/' , 
  element:<ProtectedRoute><Layout/></ProtectedRoute>,
   children:[
    {path:"/" , element:<Home/>},
    {path:"/profile/:id" , element:<Profile/>},
  ]},
  
  {path:"/signin" , element:<SignIn/>},
  {path:"/signup" , element:<SignUp/>}

]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
