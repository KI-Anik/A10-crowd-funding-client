import {
  createBrowserRouter,
} from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import Error from "../components/pages/Error";
import Home from "../components/pages/Home";
import AuthLayout from "../components/layout/AuthLayout";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import AddNewCamp from "../components/pages/AddNewCamp";
import MyCamp from "../components/pages/MyCamp";
import AllCamp from "../components/pages/AllCamp";
import MyDonation from "../components/pages/MyDonation";
import PrivateRouter from "./PrivateRouter";
import Details from "../components/pages/Details";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch('http://localhost:4000/campaigns')
      },
      {
        path: 'allCamp',
        element: <AllCamp></AllCamp>,
        loader: ()=>fetch('http://localhost:4000/campaigns')
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
      },
      {
        path: '/auth/addNewCamp',
        element: <PrivateRouter>
          <AddNewCamp></AddNewCamp>
        </PrivateRouter>,
      },
      {
        path: '/auth/myCamp',
        element: <MyCamp></MyCamp>
      },
      {
        path: '/auth/myDonation',
        element: <MyDonation></MyDonation>
      },
      {
        path: '/auth/details/:id',
        element: <Details></Details>,
        loader: ({params})=> fetch(`http://localhost:4000/campaigns/${params.id}`)
      }
    ]
  }
])

export default Router