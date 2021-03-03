import renderer from 'react-test-renderer'
import { fireEvent, render, queryByAttribute } from '@testing-library/react'
import DarkModeToggle from '../DarkModeToggle'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const getById = queryByAttribute.bind(null, 'id')

it('Snapshot test for DarkModeToggle', () => {
  const tree = renderer.create(<DarkModeToggle />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('checkbox test for DarkModeToggle', () => {
  const dom = render(<DarkModeToggle />)

  const input = getById(dom.container, 'toggle') as HTMLInputElement

  expect(input.checked).toEqual(false)
  expect(document.documentElement.classList.contains('dark')).toEqual(false)
  fireEvent.click(input)
  expect(input.checked).toEqual(true)
  expect(document.documentElement.classList.contains('dark')).toEqual(true)
  fireEvent.click(input)
  expect(input.checked).toEqual(false)
  expect(document.documentElement.classList.contains('dark')).toEqual(false)
})
