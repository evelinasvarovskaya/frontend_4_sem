import { Container, CssBaseline } from '@mui/material'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer, Header, Scroll } from './components'

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <React.Fragment>
        <CssBaseline />
        <Header />
        <Container maxWidth='xl' style={{ padding: 0, marginBottom: 12 }}>
          <Outlet />
        </Container>
        <Scroll showBelow={400} />
        <Footer />
      </React.Fragment>
    </SnackbarProvider>
  )
}

export default App
