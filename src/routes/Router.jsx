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
        loader: () => fetch('http://localhost:4000/campaigns')
      },
      {
        path: 'allCamp',
        element: <AllCamp></AllCamp>,
        loader: () => fetch('http://localhost:4000/campaigns')
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
        loader: () => fetch('http://localhost:4000/campaigns')
      },
      {
        path: '/auth/myDonation',
        element: <PrivateRouter>
          <MyDonation></MyDonation>
        </PrivateRouter>,
        loader: () => fetch('http://localhost:4000/users')
      },
      {
        path: '/auth/details/:id',
        element: <PrivateRouter>
          <Details></Details>
        </PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:4000/campaigns/${params.id}`)
      },
      {
        path: '/auth/updateCamp/:id',
        element:<Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:4000/campaigns/${params.id}`),
      }
    ]
  }
])

export default Router