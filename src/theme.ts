import { useMemo } from 'react'
import { createMuiTheme, useMediaQuery } from '@material-ui/core'

const useCustomTheme = (type?: 'dark' | 'light') => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  return useMemo(
    () => createMuiTheme({
      palette: {
        type: type || (prefersDarkMode ? 'dark' : 'light'),
      },
    }),
    [prefersDarkMode, type],
  )
}

export default useCustomTheme