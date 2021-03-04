import { ReactElement } from 'react'
import Navbar from './Navbar'
import useDarkMode, { darkModeContext } from '../context/useDarkMode'

export default {
  title: 'Navbar',
}

export const showNavbar = (): ReactElement => {
  const context = useDarkMode()
  return (
    <darkModeContext.Provider value={context}>
      <Navbar />
    </darkModeContext.Provider>
  )
}
