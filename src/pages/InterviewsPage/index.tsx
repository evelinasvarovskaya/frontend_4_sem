import { Button, ButtonGroup, Grid, Typography } from '@mui/material'
import { useStore } from 'effector-react'
import { useSnackbar } from 'notistack'
import React, { useEffect, useState } from 'react'

import { BounceArrow } from '../../components'
import {
  $employers,
  $hasNextInterviews,
  $interviews,
  getAllEmployersFx,
  getInterviewsFx,
  resetEmployers,
  resetInterviews,
} from '../../store'
import { Form, InterviewCard } from './components'

const InterviewPage = () => {
  const interviews = useStore($interviews)
  const [sort, setSort] = useState(false)
  const [filter, setFilter] = useState(false)
  const hasNext = useStore<boolean>($hasNextInterviews)
  const { enqueueSnackbar } = useSnackbar()
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
    getInterviewsFx(offset.toString())
    getAllEmployersFx()
    return () => {
      resetEmployers(), resetInterviews()
    }
  }, [])

  console.log(hasNext, 'asdasd')
  const unsubscribe = () => window.removeEventListener('scroll', handleScroll)

  const handleScroll = (e: Event) => {
    const targetEl: Document = e?.target as Document

    const scrollHeight = targetEl.documentElement.scrollHeight
    const currentHeight = Math.ceil(targetEl.documentElement.scrollTop + window.innerHeight)

    if (currentHeight + 1 >= scrollHeight && hasNext) {
      offset += 5
      getInterviewsFx(offset.toString())
    }
  }

  const handleAll = () => {
    setFilter(!filter)
    !filter && enqueueSnackbar('Отфильрованно!', { variant: 'success' })
  }

  return (
    <Grid container direction='column' rowGap={2} sx={{ padding: 2 }}>
      <Form refetch={() => getInterviewsFx(offset.toString())} />
      <Grid item container justifyContent='center'>
        <ButtonGroup variant='contained' aria-label='outlined primary button group'>
          <Button onClick={() => handleAll()}>
            {!filter ? 'Показать заходивших недавно' : 'Показать всех'}
          </Button>
          <Button
            onClick={() => {
              !sort && enqueueSnackbar('Отсортированно!', { variant: 'success' })
              setSort(!sort)
            }}
          >
            {!sort ? 'Отсортировать по алфавиту' : 'Вернуть как было'}
          </Button>
        </ButtonGroup>
      </Grid>
      {!!interviews.length &&
        [...interviews, { lastLogin: '2022-07-07T08:58:56.923855+03:00', email: 'old@gmail.com' }]
          .sort(function (a, b) {
            if (!sort) return 1
            return ('' + a.email).localeCompare(b.email)
          })
          .filter((el) => {
            if (!filter) return true
            console.log(
              new Date(el.lastLogin).toLocaleDateString(),
              new Date().toLocaleDateString(),
            )
            return new Date(el.lastLogin).toLocaleDateString() === new Date().toLocaleDateString()
          })
          .map((i, idx) => <InterviewCard key={idx} status={i.email} date={i.lastLogin} />)}
      {!interviews.length && (
        <Typography variant='h2' textAlign='center'>
          Интервьюверы отсутствуют
        </Typography>
      )}
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
            <Typography variant='h2'>Загрузка...</Typography>
          </Grid>
          <Grid item>
            <BounceArrow />
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}
export default InterviewPage
