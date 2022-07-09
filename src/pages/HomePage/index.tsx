import { Grid, Typography } from '@mui/material'

const HomePage = () => (
  <Grid container direction='column' rowGap={2} justifyContent='center' alignItems='center'>
    <Grid item>
      <Typography variant='h1' textAlign='center'>
        Сервис собеседований
      </Typography>
      <Typography variant='body1' textAlign='center'>
        Данный сервис помогает найти работу и подобрать персонал в Москве более 20 лет! Создавайте
        резюме и откликайтесь на вакансии.
      </Typography>
    </Grid>
  </Grid>
)
export default HomePage
