import { createContext, useState } from "react"

// Context for handling user's registration and login
export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  // State for showing and hidding login modal window
  const [ modal, setModal ] = useState(false)
  // State for determining weather user is trying to log in or sign in
  const [ isSigninIn, setIsSigninIn ] = useState(false)
  // Set input as required only when needed (on form submit)
  const [required, setRequired] = useState(true)
  // Set different welcome message to old user and new user
  const [ welcome, setWelcome ] = useState(false)
  // Current user input values
  const [ user, setUser ] = useState(
  {
    email: '',
    password: '',
    user: ''
  }
  )
   
  // State of user's database in localStorage
  const [ usersDB, setUsersDB ] = useState(() => {
    const userData = JSON.parse(localStorage.getItem('users'))
    return userData ? userData : []
  })

  // Boolean state for saving the user's current log situation in locaStorage
  const [ isLogged, setIsLogged ] = useState(() => {
    const loggedData = JSON.parse(localStorage.getItem('loggedUser'))
    return loggedData ? loggedData : false
  })

  // State for displaying a mesagge to not logged users trying to access protected routes
  const [ notLoggedMessage, setNotLoggedMessage ] = useState(false)

  return (
    <UserContext.Provider value={{ modal, setModal, isLogged, setIsLogged, isSigninIn, setIsSigninIn, required, setRequired, welcome, setWelcome, user, setUser, usersDB, setUsersDB, notLoggedMessage, setNotLoggedMessage }}>
      { children }
    </UserContext.Provider>
  )
}