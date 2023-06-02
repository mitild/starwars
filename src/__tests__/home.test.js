import { render, screen } from '@testing-library/react'
import Home from '../Components/Home/Home'

test('see if it has an ul for the images', () => {
  render(<Home />)
  const ulEl = screen.getByRole('list')
  expect(ulEl).toBeInTheDocument()
})
