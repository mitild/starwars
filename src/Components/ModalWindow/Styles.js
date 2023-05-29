import styled from 'styled-components'
import login from '../../Assets/login-logo.png'

const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "din-condensed", sans-serif;
  transform: ${props => props.visible === 'true' ? 'translateY(1)' : 'translateY(-100%)'};
  transition: transform .4s ease;
`

const FormWrapper = styled.form`
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 455px;
  padding: 5em 5em 3em;
  box-shadow: 0 5px 10px 0 rgba(0,0,0,.3);
  border-radius: 5px;
  background: url(${login}) #181818 no-repeat;
  background-position: 50% 8%;
  background-size: 330px;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  margin: 1.3em 0;
`

const ModalLogin = styled.button`
  font-family: inherit;
  font-size: ${props => props.focus === 'false' ? '2.2rem' : '2em'};
  font-weight: 300;
  border-color: transparent;
  background-color: transparent;
  color: ${props => props.focus === 'true' ? '#f4f5f5' : '#FADE4B'};
  text-transform: uppercase;
  cursor: pointer;
  transition: all .4s ease;
`

const ModalSignin = styled(ModalLogin)`
  color: ${props => props.focus === 'false' ? '#f4f5f5' : '#FADE4B'};
  font-size: ${props => props.focus === 'true' ? '2.2rem' : '2em'};
`

const ModalSpan = styled.span`
  font-family: inherit;
  font-size: 2rem;
  font-weight: 300;
  color: #B5B7B7;
`

const ModalInput = styled.input`
  border-radius: 3px;
  height: 40px;
  width: 100%;
  line-height: 40px;
  padding: 0 15px;
  border: 2px solid transparent;
  background: white;
  outline: none;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  font-size: 14px;
  letter-spacing: 0.792px;
  transition: all .15s ease-in-out;
  margin-bottom: 1em;
  &:focus {
    border:2px solid #edd700;
    outline: none !important;
    line-height: 40px;
    padding: 0 15px;
    font-size: 1.2rem !important;
    background-color: #484848;
    color: #f4f5f5;
}
`

const ModalBtn = styled.button`
  border-radius: 3px;
  width: 100%;
  line-height: 42px;
  background-color: #484848;
  transition: background-color .3s ease;
  color: #f4f5f5;
  font-size: 1.1rem;
  margin-top: 1em;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  border: 2px solid transparent;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  &:hover {
    border-radius: 3px;
    text-decoration: none;
    background-color: #3f6dac;
  }
`

const ModalCloseBtn = styled.button`
  width: 50px;
  position: absolute;
  color: #B5B7B7;
  background-color: transparent;
  border: none;
  top: 25px;
  right: 10px;
  font-size: 1.3rem;
  font-weight: bolder;
  text-shadow: 1px 1px 5px rgba(0,0,0,.7);
  cursor: pointer;
  transition: all .3s ease;
  &:hover {
    color: #3f6dac;
  }
`
const WelcomeTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`

export { ModalContainer, FormWrapper, ModalLogin, ModalSignin, ModalSpan, ModalInput, ModalBtn, ModalCloseBtn, TitleWrapper, WelcomeTitle }