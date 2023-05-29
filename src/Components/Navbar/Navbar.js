import { useContext } from 'react';
import { Logo, NavContainer, KidsLogo, SignIn, NavMenu, NavItem, NavLogoWrapper } from './Styles';
import logo from '../../Assets/logo.png'
import kids from '../../Assets/kids.svg'
import { Link, useNavigate } from 'react-router-dom'
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { UserContext } from '../../Context/UserContextProvider';

const Navbar = () => {
const { setModal, isLogged, setIsLogged, setWelcome } = useContext(UserContext)
const navigate = useNavigate()

const handleLogin = () => {
  const handleLogOut = () => {
    navigate('/')
    setIsLogged(prev => !prev)
    setWelcome(false)
  }
  isLogged ? handleLogOut() : setModal(prev => !prev)
}
// console.log(modal)
  return (
    <>
      <NavContainer>
        <NavLogoWrapper>
          <Link to={'*'}><KidsLogo src={ kids }/></Link>
          <Link to={'/'}><Logo src={ logo } /></Link>
          <SignIn
            onClick={ handleLogin }
          >{isLogged ? 'LOG OUT' : 'SIGN IN'}
          </SignIn>
        </NavLogoWrapper>
        <NavMenu>
          <Link to={'/'} style={{ textDecoration: 'none'}}><NavItem>Home</NavItem></Link>
          <Link to={'/ships'} style={{ textDecoration: 'none'}}><NavItem>Ships</NavItem></Link>
        </NavMenu>
      </NavContainer>
      <ModalWindow />
    </>
  )
}

export default Navbar

