import { createContext, useCallback, useState } from 'react'

export type DarkModeContext = {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const defaultContext: DarkModeContext = {
  darkMode: false,
  setDarkMode: () => {},
}

export const darkModeContext = createContext<DarkModeContext>(defaultContext)

export default function useDarkMode(): DarkModeContext {
  const [darkMode, setDarkModeState] = useState(false)
  const setDarkMode = useCallback(
    (current: boolean): void => setDarkModeState(current),
    []
  )

  return { darkMode, setDarkMode }
}
