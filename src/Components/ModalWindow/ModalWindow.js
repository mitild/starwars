import React, { useEffect }from 'react'
import {FormWrapper, ModalContainer, ModalInput, ModalBtn, ModalCloseBtn, TitleWrapper, ModalSpan, ModalLogin, ModalSignin} from './Styles';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContextProvider';
import { useNavigate } from 'react-router-dom';
import { WelcomeComponent } from './WelcomeComponent';

export const ModalWindow = () => {
  const { modal, setModal, isLogged, setIsLogged, isSigninIn, setIsSigninIn, required, setRequired, welcome, setWelcome, user, setUser, usersDB, setUsersDB } = useContext(UserContext)
  const navigate = useNavigate()

  const handleLoginOrSubmit = (value) => {
    setRequired(false);
    setIsSigninIn(value);
    setUser(prevUser => ({
      ...prevUser,
      password: '',
    }));
  };

  const handleLoginWindow = () => {
    setModal(prev => !prev)
    setUser({
      email: '',
      password: '',
      user: '',
    });
  }

  const handleUser = (e) => {
    const { name, value } = e.target
    setUser(prev => ({
        ...prev,
        [ name ] : value,
      })
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRequired(true)
    
    const emailExists = usersDB.some((userData) => userData.email === user.email);
    const passwordMatches = usersDB ? usersDB.find(eachUser => eachUser.email === user.email && eachUser.password === user.password) : []

    if(user.email !== '' && user.password !== '') {
      if (isSigninIn && emailExists) {
        alert("Email already registered, would you prefer to Login? Click in the 'Log in' tab. Else if you're facing some troubles please contact us")
      }
      else if(!isSigninIn && emailExists && passwordMatches) {
        alert(`go to Welcome page ${user.user}`)
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
          alert(`Welcome ${user.user}! You are now signed in`)
        }, 2000)
      }
      else if(!emailExists && !isSigninIn){
        alert('Email is not in our db, sign in instead')
      }
    }
  }

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(usersDB))
  }, [usersDB])

  useEffect(() => {
    localStorage.setItem('loggedUser', JSON.stringify(isLogged))
  }, [isLogged])

  console.log(isLogged)

  return (
    welcome ? <WelcomeComponent userName={ user.user }/> :
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
          required
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
        <ModalCloseBtn onClick={ handleLoginWindow }>X</ModalCloseBtn>
      </FormWrapper>
    </ModalContainer>
  )  
}
