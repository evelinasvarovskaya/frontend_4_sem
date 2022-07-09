import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Card, Grid, Typography } from '@mui/material'
import { FC } from 'react'

type CardProp = {
  status: string
  date: string
}

const InterviewCard: FC<CardProp> = ({ status, date }) => {
  return (
    <Grid item>
      <Card variant='outlined'>
        <Grid container columnGap={2}>
          <Grid item>
            <AccountCircleIcon sx={{ fontSize: 162 }} />
          </Grid>
          <Grid item sx={{ paddingTop: 4 }}>
            <Grid container direction='column' rowGap={3}>
              <Grid item>
                <Typography variant='h2'>Почта: {status}</Typography>
              </Grid>
              <Grid item>
                <Typography variant='h3'>
                  Последний раз в сети: {new Date(date).toDateString()}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}
export default InterviewCard
