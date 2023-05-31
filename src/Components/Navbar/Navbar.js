import { useContext } from 'react';
import { Logo, NavContainer, KidsLogo, SignIn, NavMenu, NavItem, NavLogoWrapper } from './Styles';
import logo from '../../Assets/logo.png'
import kids from '../../Assets/kids.svg'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContextProvider';
import { LoginModal } from '../LoginModal/LoginModal';

const Navbar = () => {
const { setModal, isLogged, setIsLogged, setWelcome, setNotLoggedMessage } = useContext(UserContext)
const navigate = useNavigate()

const handleLog = () => {
  setNotLoggedMessage(false)
  const handleLogOut = () => {
    navigate('/')
    setIsLogged(prev => !prev)
    setWelcome(false)
  }
  const handleLogin = () => {
    setModal(prev => !prev)
    navigate('/login')
  }
  isLogged ? handleLogOut() : handleLogin()
}

  return (
    <>
      <NavContainer>
        <NavLogoWrapper>
          <Link to={'*'}><KidsLogo src={ kids }/></Link>
          <Link to={'/'}><Logo src={ logo } /></Link>
          <SignIn
            onClick={ handleLog }
          >{isLogged ? 'LOG OUT' : 'SIGN IN'}
          </SignIn>
        </NavLogoWrapper>
        <NavMenu>
          <Link to={'/'} style={{ textDecoration: 'none'}}><NavItem>Home</NavItem></Link>
          <Link to={'/ships'} style={{ textDecoration: 'none'}}><NavItem>Ships</NavItem></Link>
        </NavMenu>
      </NavContainer>
      <LoginModal />
    </>
  )
}

export default Navbar

