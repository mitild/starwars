import styled from 'styled-components'

const NavContainer = styled.nav`
  width: 100%;
  font-family: "din-condensed", sans-serif;
  font-weight: 300;
  font-style: normal;
  font-size: 1.2rem;
  letter-spacing: .8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.2em 3em 0;
  border-bottom: 1px #48494a solid;
`

const Logo = styled.img`
  width: 180px;
`

const KidsLogo = styled.img`
  width: 50px;
`
const SignIn = styled.div`
  color: #FFF;
  font-weight: 700;
  position: relative;
  cursor: pointer;
  &::before {
    content: '';
    background: url('https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User-85043c6786ab.svg') no-repeat;
    height: 20px;
    width: 20px;
    right: 120%;
    background-position: 50%;
    background-size: 20px;
    position: absolute;
    display: block
  }
  &:hover::before {
    background: url('https://static-mh.content.disney.io/matterhorn/assets/starwars/navigation/SW_Oneid_User_Hover-cb775c30fee5.svg') no-repeat;
    background-size: 26px;
    background-position: center
  }
`

const NavMenu = styled.ul`
  display: flex;
  gap: 2em;
  padding: 1.5em 0 .7em;
  font-weight: 400;
`
const NavItem = styled.li`
  list-style: none;
  text-transform: uppercase;
  cursor: pointer;
  color: #B5B7B7;
  &:hover {
    color: #FFF;
  }
`

const NavLogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export { NavContainer, Logo, KidsLogo, SignIn, NavMenu, NavItem, NavLogoWrapper }