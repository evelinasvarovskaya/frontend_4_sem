import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from '@mui/material'
import { useSnackbar } from 'notistack'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  refetch: () => void
}

type FormDataType = {
  name: string
  middleName: string
  lastName: string
  email: string
  password: string
}

type ErrorDataType = {
  name: boolean
  middleName: boolean
  lastName: boolean
  email: boolean
  password: boolean
  [key: string]: boolean
}

const Form: FC<Props> = ({ refetch }) => {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormDataType>({
    email: '',
    lastName: '',
    middleName: '',
    name: '',
    password: '',
  })

  const [errors, setErrors] = useState<ErrorDataType>({
    email: false,
    lastName: false,
    middleName: false,
    name: false,
    password: false,
  })

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  }

  const validateLength = (value: string) => {
    return value.length < 8
  }

  const validateRequired = (value: string) => {
    return !value.length
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    switch (e.target.name) {
      case 'email':
        setErrors({
          ...errors,
          [e.target.name]: validateEmail(e.target.value) ? false : true,
        })
        break
      case 'password':
        setErrors({
          ...errors,
          [e.target.name]: validateLength(e.target.value),
        })
        break
      default:
        setErrors({
          ...errors,
          [e.target.name]: validateRequired(e.target.value),
        })
    }

    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault()
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch((process.env.REACT_APP_API_URL as string) + '/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email as string,
          password: formData.password as string,
          details: {
            user_name: formData.name as string,
            middle_name: formData.middleName as string,
            last_name: formData.lastName as string,
          },
        }),
      })
      if (response.status > 300) throw new Error(Object.keys(JSON.parse(response.body as any))[0])
      enqueueSnackbar('Успешно создан', { variant: 'success' })
      refetch()
    } catch (e: any) {
      enqueueSnackbar(e.message, { variant: 'error' })
    }
  }

  return (
    <Grid item>
      <Grid
        item
        container
        direction='column'
        justifyContent='center'
        rowSpacing={2}
        style={{ width: 'fit-content', margin: '0 auto' }}
      >
        <Typography variant='h2'>Создать собеседующегося</Typography>
        <Grid item style={{ maxWidth: '500px' }}>
          <FormControl style={{ maxWidth: '500px', width: '100%' }}>
            <InputLabel htmlFor='name'>Имя</InputLabel>
            <OutlinedInput
              id='name'
              label='Имя'
              name='name'
              onChange={handleChangeInput}
              error={errors.name}
              placeholder='Имя собеседующегося'
            />
          </FormControl>
        </Grid>
        <Grid item style={{ maxWidth: '500px' }}>
          <FormControl style={{ maxWidth: '500px', width: '100%' }}>
            <InputLabel htmlFor='middlename'>Фамилия</InputLabel>
            <OutlinedInput
              id='middlename'
              label='Фамилия'
              name='middleName'
              onChange={handleChangeInput}
              error={errors.middleName}
              placeholder='Фамилия собеседующегося'
            />
          </FormControl>
        </Grid>
        <Grid item style={{ maxWidth: '500px' }}>
          <FormControl style={{ maxWidth: '500px', width: '100%' }}>
            <InputLabel htmlFor='lastname'>Отчество</InputLabel>
            <OutlinedInput
              id='lastname'
              label='Отчество'
              name='lastName'
              onChange={handleChangeInput}
              error={errors.lastName}
              placeholder='Отчество собеседующегося'
            />
          </FormControl>
        </Grid>
        <Grid item style={{ maxWidth: '500px' }}>
          <FormControl style={{ maxWidth: '500px', width: '100%' }}>
            <InputLabel htmlFor='mail'>Почта</InputLabel>
            <OutlinedInput
              id='mail'
              label='Почта'
              name='email'
              onChange={handleChangeInput}
              error={errors.email}
              placeholder='Почта собеседующегося'
            />
          </FormControl>
        </Grid>
        <Grid item style={{ maxWidth: '500px', width: '100%' }}>
          <FormControl style={{ maxWidth: '500px', width: '100%' }}>
            <InputLabel htmlFor='outlined-adornment-password'>
              Пароль {errors.password && 'минимум 8 символов'}
            </InputLabel>
            <OutlinedInput
              style={{ maxWidth: '500px', width: '100%' }}
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              name='password'
              error={errors.password}
              value={formData.password}
              onChange={handleChangeInput}
              placeholder='Пароль собеседующегося'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
        </Grid>
        <Grid item container alignItems='center' justifyContent='center'>
          <Grid item>
            <Button
              disabled={
                !Object.values(errors).every((el) => !el) ||
                !Object.values(formData).every((el) => el)
              }
              onClick={handleSubmit}
            >
              Cоздать
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Form
