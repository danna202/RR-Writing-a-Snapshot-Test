import { render, screen } from '@testing-library/react'
import App from './App'
import renderer from 'react-test-renderer'


test('renders text MickeyMouse', () => {
  render(<App />)
  const nameElement = screen.getByText(/mickey mouse/i)
  expect(nameElement).toBeInTheDocument()
});