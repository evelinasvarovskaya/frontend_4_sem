import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import { Card, Grid, Typography } from '@mui/material'
import { FC } from 'react'

type CardProp = {
  name: string
  employees: number
}

const CompanyCard: FC<CardProp> = ({ name, employees }) => {
  return (
    <Grid item>
      <Card variant='outlined'>
        <Grid container columnGap={2}>
          <Grid item>
            <PointOfSaleIcon sx={{ fontSize: 162 }} />
          </Grid>
          <Grid item sx={{ paddingTop: 4 }}>
            <Grid container direction='column' rowGap={3}>
              <Grid item>
                <Typography variant='h2'>{name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant='h3'>Количество сотрудников: {employees}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}
export default CompanyCard
