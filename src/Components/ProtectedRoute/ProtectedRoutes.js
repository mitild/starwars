import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContextProvider'

export const ProtectedRoutes = () => {
  const { isLogged, setModal, setNotLoggedMessage } = useContext(UserContext)

  const handleNotLoggedUser = () => {
    setModal(true)
    setNotLoggedMessage(true)
    return <Navigate to={'/login'} />
  }

  return (
    isLogged ? <Outlet /> : handleNotLoggedUser()
  )
}