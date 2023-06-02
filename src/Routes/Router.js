import { createBrowserRouter  } from "react-router-dom";
import Ships from "../Components/Ships/Ships";
import Ship from "../Components/Ship/Ship"
import Error from "./Error";
import Home from "../Components/Home/Home";
import { LoginModal } from "../Components/LoginModal/LoginModal";
import { ProtectedRoutes } from '../Components/ProtectedRoute/ProtectedRoutes';
import Cards from "../Components/Ship/Cards";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          {
            path: 'login',
            element: <LoginModal />,
          }
        ]
      },
      {  
      path: '/ships',
      element: <ProtectedRoutes />,
      children: [
          {
            index: true,
            element: <Ships />,
          },
          {
            path: '/ships/:shipid',
            element: <Ship />,
          },
          {
            path: '/ships/:shipid/:id',
            element: <Cards />,
          },
        ]
      },
      {
        path: '*',
        element: <Error />,
      }
    ]
    }
  
  ])

export default router