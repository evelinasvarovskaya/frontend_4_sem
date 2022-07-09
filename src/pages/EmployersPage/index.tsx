import { Grid, Typography } from '@mui/material'
import { useStore } from 'effector-react'
import React, { useEffect } from 'react'

import { BounceArrow } from '../../components'
import { $employers, $hasNextEmployers, getEmployersFx, resetEmployers } from '../../store'
import { CompanyCard } from './components'

const EmployersPage = () => {
  const companies = useStore($employers)
  const hasNext = useStore<boolean>($hasNextEmployers)
  let offset = 0

  useEffect(() => {
    if (hasNext) {
      const win: Window = window
      win.addEventListener('scroll', handleScroll)
    }

    return () => {
      unsubscribe()
    }
  }, [hasNext])

  useEffect(() => {
    getEmployersFx(offset.toString())
    return () => resetEmployers()
  }, [])

  const unsubscribe = () => window.removeEventListener('scroll', handleScroll)

  const handleScroll = (e: Event) => {
    const targetEl: Document = e?.target as Document

    const scrollHeight = targetEl.documentElement.scrollHeight
    const currentHeight = Math.ceil(targetEl.documentElement.scrollTop + window.innerHeight)

    if (currentHeight + 1 >= scrollHeight && hasNext) {
      offset += 5
      getEmployersFx(offset.toString())
    }
  }

  if (!companies.length)
    return (
      <Typography variant='h3' textAlign='center'>
        Загрузка...
      </Typography>
    )
  return (
    <Grid container direction='column' rowGap={2} sx={{ padding: 2 }}>
      {companies.map((c) => (
        <CompanyCard key={c.id} name={c.name} employees={c.employees} />
      ))}
      {hasNext && (
        <Grid
          item
          container
          alignItems='center'
          direction='column'
          sx={{ margin: '2em 0 8em' }}
          rowGap={1}
        >
          <Grid item>
            <Typography variant='h2'>Далее</Typography>
          </Grid>
          <Grid item>
            <BounceArrow />
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
export default EmployersPage
