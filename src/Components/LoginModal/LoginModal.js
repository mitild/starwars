import React, { useEffect }from 'react'
import { FormWrapper, ModalContainer, ModalInput, ModalBtn, ModalCloseBtn, TitleWrapper, ModalSpan, ModalLogin, ModalSignin, LoginMessage } from './Styles';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
import { WelcomeComponent } from './WelcomeComponent';

export const LoginModal = () => {
  // All elements provided by USerContext
  const { modal, setModal, isLogged, setIsLogged, isSigninIn, setIsSigninIn, required, setRequired, welcome, setWelcome, user, setUser, usersDB, setUsersDB, notLoggedMessage, setNotLoggedMessage } = useContext(UserContext)
  const navigate = useNavigate()

  // Print the Sign in form or the Login form dynamically according to which button was clicked
  const handleLoginOrSubmit = (value) => {

    // Handle if input browser alert should be trigger or not
    setRequired(false);

    // Indicates if user is signing in on logging in
    setIsSigninIn(value);

    // Reset input values without mutating LocalStorage last saved user's password
    setUser(prevUser => ({
      ...prevUser,
      password: '',
    }));
  };

  // Close window and reset input values and other states
  const handleCloseWindow = () => {

    // Close or open Modal Login window
    setModal(prev => !prev)

    // Check if an alert of not logged in status should be or not be displayed
    setNotLoggedMessage(false)
    setIsSigninIn(false)

    // Redirects users to home page
    navigate('/')
    setUser({
      email: '',
      password: '',
      user: '',
    });
  }

  // Get the input values
  const handleUser = (e) => {
    const { name, value } = e.target
    setUser(prev => ({
        ...prev,
        [ name ] : value,
      })
    )
  }

  // Actions on form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    // By setting the required property to true it checks for error in the inputs values
    setRequired(true)
    
    // Variable to check, at Sign in, if user already exists in the Database
    const emailExists = usersDB.some((userData) => userData.email === user.email);

    // Variable to check that email and password are consistent with those saved in the Database
    const passwordMatches = usersDB ? usersDB.find(eachUser => eachUser.email === user.email && eachUser.password === user.password) : []

    // Logic applied at Login or Sign in
    if(user.email !== '' && user.password !== '') {
      if (isSigninIn && emailExists) {
        alert("Email already registered, would you prefer to Login? Click in the 'Log in' tab. Else if you're facing some troubles please contact us")
      }
      else if(!isSigninIn && emailExists && passwordMatches) {
        setIsLogged(true)
        setWelcome(true)
        setTimeout(() => {
          navigate('/ships')
          setModal(false)
        }, 2000)
      }
      else if(!isSigninIn && emailExists && !passwordMatches) {
        alert('Wrong password')
      }
      else if(!emailExists && isSigninIn) {
        setUsersDB(prev => [...prev, user])
        setWelcome(true)
        setTimeout(() => {
          setIsLogged(true)
          navigate('/ships')          
          setModal(false)
        }, 2000)
      }
      else if(!emailExists && !isSigninIn){
        alert('Email is not in our db, sign in instead')
      }
    }
  }

  // Save user in LocalStorage for future use
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersDB))
  }, [usersDB])

  // Keep track of user's logged in situation by saving this boolean in LocalStorage
  useEffect(() => {
    localStorage.setItem('loggedUser', JSON.stringify(isLogged))
  }, [isLogged])

  // Variables to be able to welcome user with it user name printed in welcome message window in the WelcomeComponent render under this lines
  const getUserName = user.email && usersDB.find(eachUser => eachUser.email === user.email)
  const userName = getUserName ? getUserName.user : ''

  return (
    welcome ? <WelcomeComponent userName={ userName }/> :
    <ModalContainer visible={modal.toString() }>
      <FormWrapper onSubmit={ handleSubmit }>
        <TitleWrapper>
          {}
          <ModalLogin
            focus={ isSigninIn.toString() }
            onClick={ () => handleLoginOrSubmit(false) }
          >log in
          </ModalLogin>
          <ModalSpan>/</ModalSpan>
          <ModalSignin
            focus={ isSigninIn.toString() }
            onClick={ () => handleLoginOrSubmit(true) }
          >sign in
          </ModalSignin>
        </TitleWrapper>
        { isSigninIn
          && 
          <ModalInput 
            placeholder='User name'
            type='text'
            name='user'
            id='user'
            value={ user.user }
            onChange={ handleUser }
            required= { required }
          />
        }
        <ModalInput 
          placeholder='Email Address'
          type='email'
          name='email'
          id='email'
          value={ user.email }
          onChange={ handleUser }
          required= { required }
        />
        <ModalInput 
          placeholder='Password'
          type='password'
          name='password'
          id='password'
          value={ user.password }
          onChange={ handleUser }
          required= { required }
        />
        <ModalBtn>{isSigninIn ? 'Sign in' : 'Log in'}</ModalBtn>
        { notLoggedMessage && <LoginMessage>Ops... You need to login to access this content</LoginMessage>}
        <ModalCloseBtn onClick={ handleCloseWindow }>X</ModalCloseBtn>
      </FormWrapper>
    </ModalContainer>
  )  
}
