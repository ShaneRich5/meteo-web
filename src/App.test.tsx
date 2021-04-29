import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/Icons made by/i)
  expect(linkElement).toBeInTheDocument()
});
