import { FormWrapper, ModalContainer, ModalCloseBtn, TitleWrapper, WelcomeTitle } from './Styles';
import { useContext } from 'react';
import { UserContext } from '../../Context/UserContextProvider';

export const WelcomeComponent = ({ userName }) => {
  const { modal, setModal, isSigninIn } = useContext(UserContext)

  const handleLoginWindow = () => {
    setModal(prev => !prev)
  }
  
  return (
      <ModalContainer visible={ modal.toString() }>
        <FormWrapper>
          <TitleWrapper>
            <WelcomeTitle>
              { isSigninIn ? `Welcome ${ userName }! You are now signed in` : `Welcome back ${ userName }! You are being redirected`}
            </WelcomeTitle>
          </TitleWrapper>
        </FormWrapper>
          <ModalCloseBtn onClick={ handleLoginWindow }>X</ModalCloseBtn>
      </ModalContainer>
  )  
}