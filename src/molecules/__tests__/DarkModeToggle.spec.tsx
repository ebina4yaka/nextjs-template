import renderer from 'react-test-renderer'
import { fireEvent, render, queryByAttribute } from '@testing-library/react'
import { renderHook, act } from '@testing-library/react-hooks'
import DarkModeToggle from '../DarkModeToggle'
import useDarkMode, { darkModeContext } from '../../context/useDarkMode'

const getById = queryByAttribute.bind(null, 'id')

it('Snapshot test for DarkModeToggle', () => {
  const tree = renderer.create(<DarkModeToggle />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('checkbox test for DarkModeToggle', () => {
  const { result } = renderHook(() => useDarkMode())
  const dom = render(
    <darkModeContext.Provider value={result.current}>
      <DarkModeToggle />
    </darkModeContext.Provider>
  )

  const input = getById(dom.container, 'toggle') as HTMLInputElement

  expect(document.documentElement.classList.contains('dark')).toEqual(false)
  expect(result.current.darkMode).toEqual(false)
  act(() => {
    fireEvent.click(input)
  })
  expect(document.documentElement.classList.contains('dark')).toEqual(true)
  expect(result.current.darkMode).toEqual(true)
  act(() => {
    fireEvent.click(input)
  })
  expect(document.documentElement.classList.contains('dark')).toEqual(false)
  expect(result.current.darkMode).toEqual(false)
})
