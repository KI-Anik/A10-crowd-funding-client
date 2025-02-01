import {
  createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import Error from "../components/pages/Error";
import Home from "../components/pages/Home";
import AuthLayout from "../components/layout/AuthLayout";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
    ]
  },
  {
    path: 'auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>
      },
      {
        path: '/auth/register',
        element: <Register></Register>
      }
    ]
  }
])

export default Router