import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import EmployeeForm from './features/employee/EmployeeForm';
import useCustomTheme from './theme';
import Header from './components/Header';
import { CssBaseline } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

const App = () => {
  const theme = useCustomTheme()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <EmployeeForm />
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  )
}

export default App;
