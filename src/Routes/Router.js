import { createBrowserRouter  } from "react-router-dom";
import Ships from "../Components/Ships/Ships";
import Ship from "../Components/Ship/Ship"
import Error from "./Error";
import Home from "../Components/Home/Home";
import { LoginModal } from "../Components/LoginModal/LoginModal";
import { ProtectedRoutes } from '../Components/ProtectedRoutes/ProtectedRoutes';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
    children: [{
      path: '/login',
      element: <LoginModal />,
      errorElement: <Error />
    }]
  },
  { element: <ProtectedRoutes />,
    children: [
      {
        path: '/ships',
        element: <Ships />,
        errorElement: <Error />
      },
      {
        path: 'ships/:shipid',
        element: <Ship />,
        errorElement: <Error />
      }
    ]
  },
  {
    path: '/*',
    element: <Error />,
    errorElement: <Error />
  }
])

export default router