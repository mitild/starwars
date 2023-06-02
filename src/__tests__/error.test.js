import { render, screen } from '@testing-library/react'
import { UserContextProvider } from '../Context/UserContextProvider';
import { MemoryRouter } from 'react-router-dom';
import Error from '../Routes/Error';


describe('Error', () => {
  function renderError() {
    render(
      <MemoryRouter>
        <UserContextProvider>
          <Error />
        </UserContextProvider>
      </MemoryRouter>
    );
  }

  it('must have an image', () => {
    renderError()
    expect(screen.getByAltText(/error message/i)).toBeInTheDocument()
  })

  it('must have an h2', () => {
    renderError()
    expect(screen.getByText(/THIS PAGE IS NOT FULLY ARMED AND OPERATIONAL./i)).toBeInTheDocument()
  })
});