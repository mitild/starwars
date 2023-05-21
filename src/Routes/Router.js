import { createBrowserRouter  } from "react-router-dom";
import Ships from "../Components/Ships/Ships";
import Ship from "../Components/Ship/Ship"
import Error from "./Error";
const router = createBrowserRouter([
  {
    path: '/',
    element: <h1 style={{color: '#fff'}}>I am the Home page</h1>,
    errorElement: <Error />
  },
  {
    path: '/ships',
    element: <Ships />,
  },
  {
    path: 'ships/:shipid',
    element: <Ship />
  }
])

export default router