import { Paper, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Paper
      sx={{
        borderRadius: 0,
        padding: 1,
      }}
      variant='outlined'
    >
      <Typography textAlign='center' variant='body1'>
        Выполнено Эвелиной Сваровской из группы 201-322
      </Typography>
    </Paper>
  )
}
export default Footer
