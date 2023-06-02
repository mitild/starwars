import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { LoginModal } from '../Components/LoginModal/LoginModal'
import { UserContextProvider } from '../Context/UserContextProvider';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe('LoginModal', () => {
  function renderLoginModal() {
    render(
      <MemoryRouter>
        <UserContextProvider>
          <LoginModal />
        </UserContextProvider>
      </MemoryRouter>
    );

    function getForm() {
      return {
        user: screen.queryByPlaceholderText(/user name/i),
        email: screen.getByPlaceholderText('Email Address'),
        password: screen.getByPlaceholderText('Password')
      };
    }
    return {
      getForm,
      toggleUserSignin: screen.getByText(/sign in/i),
      toggleUserLogin: screen.getByText('log in')
    }
  }

  it('check if email and password inputs exist in the document', () => {
    const { getForm } = renderLoginModal()
    let form = getForm()

    expect(form.email).toBeInTheDocument()
    expect(form.password).toBeInTheDocument()
  })

  it('check if user input does not exist in the document', () => {
    const { getForm } = renderLoginModal()
    let form = getForm()

    expect(form.user).not.toBeInTheDocument()
  })


  
  
  // it('check if users input conditionally renders in the document', async () => {
  //   const { getForm, toggleUserSignin, toggleUserLogin } = renderLoginModal()
  //   let form = getForm()
    
  //   expect(toggleUserSignin).toBeInTheDocument()
  //   expect(toggleUserLogin).toBeInTheDocument()

  //   fireEvent.click(toggleUserSignin)
  //   fireEvent.change(form.user, { target: { value: "Juan" } })
  //   expect(form.user.value).toBe("Juan");
  //   await waitFor(() => expect(form.user).toBeInTheDocument())
  // })

  });