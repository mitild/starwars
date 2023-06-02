import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContextProvider'

export const ProtectedRoutes = () => {
  // All elements provided by USerContext
  const { isLogged, setModal, setNotLoggedMessage } = useContext(UserContext)

  // Actions for when a not logged in user wants to access the protected routes
  const handleNotLoggedUser = () => {
    setModal(true)
    setNotLoggedMessage(true)
    return <Navigate to={'/login'} />
  }

  return (
    // Conditionally render the protected content according the user's logged state
    isLogged ? <Outlet /> : handleNotLoggedUser()
  )
}