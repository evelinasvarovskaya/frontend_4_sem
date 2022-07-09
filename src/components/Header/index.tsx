import AnimationIcon from '@mui/icons-material/Animation'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import Paths from '../../routes'

const pages = [
  {
    name: 'Работодатели',
    path: Paths.EMPLOYERS,
  },
  {
    name: 'Собеседования',
    path: Paths.INTERVIEWS,
  },
]

const Header = () => {
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const location = useLocation()

  return (
    <AppBar position='static' variant='outlined' color='secondary'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size='large' onClick={handleOpenNavMenu} color='inherit'>
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    navigate(page.path), handleCloseNavMenu()
                  }}
                >
                  <Typography
                    textAlign='center'
                    variant={location.pathname === page.path ? 'body2' : 'body1'}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Button
            variant='text'
            onClick={() => {
              navigate(Paths.MAIN)
            }}
            sx={{ color: 'white' }}
          >
            <Typography variant='h6' noWrap>
              Сервис собеседований
            </Typography>
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => {
                  navigate(page.path), handleCloseNavMenu()
                }}
                sx={{
                  my: 2,
                  color: 'white',
                  background: location.pathname === page.path ? 'rgba(242,243,245,0.14)' : 'none',
                  display: 'block',
                }}
              >
                <Typography textAlign='center' variant='body1'>
                  {page.name}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
