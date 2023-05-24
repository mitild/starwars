import { createBrowserRouter  } from "react-router-dom";
import Ships from "../Components/Ships/Ships";
import Ship from "../Components/Ship/Ship"
import Error from "./Error";
import Home from "../Components/Home/Home";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/ships',
    element: <Ships />,
    errorElement: <Error />
  },
  {
    path: 'ships/:shipid',
    element: <Ship />,
    errorElement: <Error />
  },
  {
    path: '/*',
    element: <Error />,
    errorElement: <Error />
  }
])

export default router