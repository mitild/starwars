import {Logo, NavContainer, KidsLogo, SignIn, NavMenu, NavItem, NavLogoWrapper } from './Styles';
import logo from '../../Assets/logo.png'
import kids from '../../Assets/kids.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

      <NavContainer>
        <NavLogoWrapper>
          <Link to={'*'}><KidsLogo src={ kids }/></Link>
          <Link to={'/'}><Logo src={ logo } /></Link>
          <Link to={'/'} style={{ textDecoration: 'none'}}><SignIn>SIGN IN</SignIn></Link>
        </NavLogoWrapper>
        <NavMenu>
          <Link to={'/'} style={{ textDecoration: 'none'}}><NavItem>Home</NavItem></Link>
          <Link to={'/ships'} style={{ textDecoration: 'none'}}><NavItem>Ships</NavItem></Link>
        </NavMenu>
      </NavContainer>
    

  )
}

export default Navbar

