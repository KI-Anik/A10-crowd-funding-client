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
import Update from "../components/pages/Update";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://a10-crowd-funding.vercel.app/campaigns')
      },
      {
        path: 'allCamp',
        element: <AllCamp></AllCamp>,
        loader: () => fetch('https://a10-crowd-funding.vercel.app/campaigns')
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
        element: <PrivateRouter>
          <MyCamp></MyCamp>
        </PrivateRouter>,
        loader: () => fetch('https://a10-crowd-funding.vercel.app/campaigns')
      },
      {
        path: '/auth/myDonation',
        element: <PrivateRouter>
          <MyDonation></MyDonation>
        </PrivateRouter>,
        loader: () => fetch('https://a10-crowd-funding.vercel.app/users')
      },
      {
        path: '/auth/details/:id',
        element: <PrivateRouter>
          <Details></Details>
        </PrivateRouter>,
        loader: ({ params }) => fetch(`https://a10-crowd-funding.vercel.app/campaigns/${params.id}`)
      },
      {
        path: '/auth/updateCamp/:id',
        element:<Update></Update>,
        loader: ({ params }) => fetch(`https://a10-crowd-funding.vercel.app/campaigns/${params.id}`),
      }
    ]
  }
])

export default Router