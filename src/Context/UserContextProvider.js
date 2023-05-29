import { createContext, useState } from "react"

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [ modal, setModal ] = useState(false)
  const [ isSigninIn, setIsSigninIn ] = useState(false)
  const [required, setRequired] = useState(true)
  const [ welcome, setWelcome ] = useState(false)
  const [ user, setUser ] = useState(
  {
    email: '',
    password: '',
    user: ''
  }
  )
    
  const [ usersDB, setUsersDB ] = useState(() => {
    const userData = JSON.parse(localStorage.getItem('users'))
    return userData ? userData : []
  })

  const [ isLogged, setIsLogged ] = useState(() => {
    const loggedData = JSON.parse(localStorage.getItem('loggedUser'))
    return loggedData ? loggedData : false
  })

  return (
    <UserContext.Provider value={{ modal, setModal, isLogged, setIsLogged, isSigninIn, setIsSigninIn, required, setRequired, welcome, setWelcome, user, setUser, usersDB, setUsersDB }}>
      { children }
    </UserContext.Provider>
  )
}