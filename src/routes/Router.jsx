import {
    createBrowserRouter,
  } from "react-router-dom";
import HomeLayout from "../components/layout/HomeLayout";
import Error from "../components/pages/Error";
import Home from "../components/pages/Home";

  const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <Error></Error>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          }
        ]
    }
  ])

  export default Router