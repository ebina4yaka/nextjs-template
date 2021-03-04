import { ReactElement } from 'react'
import DarkModeToggle from './DarkModeToggle'
import useDarkMode, { darkModeContext } from '../context/useDarkMode'

export default {
  title: 'DarkModeToggle',
}

export const showDarkModeToggle = (): ReactElement => {
  const context = useDarkMode()
  return (
    <darkModeContext.Provider value={context}>
      <DarkModeToggle />
    </darkModeContext.Provider>
  )
}
