import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import { EmployersPage, InterviewsPage } from './pages'
import HomePage from './pages/HomePage'
import Paths from './routes'
import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<HomePage />} />
          <Route path={Paths.EMPLOYERS} element={<EmployersPage />} />s
          <Route path={Paths.INTERVIEWS} element={<InterviewsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
)
