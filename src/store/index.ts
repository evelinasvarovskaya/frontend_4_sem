import { createEffect, createEvent, createStore } from 'effector'

export const getEmployersFx = createEffect(async (offset: string) => {
  const url = `${process.env.REACT_APP_API_URL}companies/?limit=5&offset=${offset}`
  const req = await fetch(url)
  return req.json()
})

export const getAllEmployersFx = createEffect(async () => {
  const url = `${process.env.REACT_APP_API_URL}companies/?limit=1000&offset=0`
  const req = await fetch(url)
  return req.json()
})

export type Company = {
  id: number
  name: string
  employees: number
}

type CompanyRaw = {
  id: number
  company_name: string
  employees_count: number
  user: number
}

export const resetEmployers = createEvent()

export const $employers = createStore<Company[]>([]).on(
  getEmployersFx.doneData,
  (state, employers) =>
    state.concat(
      employers.results.map(
        (r: CompanyRaw): Company => ({
          id: r.id,
          name: r.company_name,
          employees: r.employees_count,
        }),
      ),
    ),
)

$employers.on(getAllEmployersFx.doneData, (_, employers) =>
  employers.results.map(
    (r: CompanyRaw): Company => ({
      id: r.id,
      name: r.company_name,
      employees: r.employees_count,
    }),
  ),
)

$employers.reset(resetEmployers)

export const $hasNextEmployers = createStore<boolean>(false).on(
  getEmployersFx.doneData,
  (_, data) => !!data.next,
)

$hasNextEmployers.reset(resetEmployers)

export const getFindersFx = createEffect(async (offset: string) => {
  const url = `${process.env.REACT_APP_API_URL}candidates/?limit=5&offset=${offset}`
  const req = await fetch(url)
  return req.json()
})

export type Finder = {
  id: number
  name: string
  lastname: string
}

type FinderRaw = {
  id: number
  first_name: string
  last_name: string
  cv: string
  photo: string
  user: number
}

export const resetFinders = createEvent()

export const $finders = createStore<Finder[]>([]).on(getFindersFx.doneData, (state, finders) =>
  state.concat(
    finders.results.map(
      (r: FinderRaw): Finder => ({
        id: r.id,
        name: r.first_name,
        lastname: r.last_name,
      }),
    ),
  ),
)

$finders.reset(resetFinders)

export const $hasNextFinders = createStore<boolean>(false).on(
  getFindersFx.doneData,
  (_, data) => !!data.next,
)

$hasNextFinders.reset(resetFinders)

export const getVacanciesFx = createEffect(async (offset: string) => {
  const url = `${process.env.REACT_APP_API_URL}vacancies/?limit=5&offset=${offset}`
  const req = await fetch(url)
  return req.json()
})

type FormData = { title: string; description: string; company?: string }

export const postVacancyFx = createEffect(async ({ title, description, company }: FormData) => {
  const url = `${process.env.REACT_APP_API_URL}vacancies/`
  const req = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      description,
      company: Number(company),
    }),
  })
  return req
})

export type Vacancy = {
  id: number
  title: string
  description: string
}

type VacancyRaw = {
  id: number
  title: string
  description: string
  company: number
}

export const resetVacancies = createEvent()

export const $vacancies = createStore<Vacancy[]>([]).on(
  getVacanciesFx.doneData,
  (state, vacancies) =>
    state.concat(
      vacancies.results.map(
        (r: VacancyRaw): Vacancy => ({
          id: r.id,
          title: r.title,
          description: r.description,
        }),
      ),
    ),
)

$vacancies.reset(resetVacancies)

export const $hasNextVacancies = createStore<boolean>(false).on(
  getVacanciesFx.doneData,
  (_, data) => !!data.next,
)

$hasNextVacancies.reset(resetVacancies)

export const getInterviewsFx = createEffect(async (offset: string) => {
  const url = `${process.env.REACT_APP_API_URL}user/?limit=5&offset=${offset}`
  const req = await fetch(url)
  return req.json()
})

export type Interview = {
  lastLogin: string
  email: string
}

type InterviewRaw = {
  last_login: string
  email: string
}

export const resetInterviews = createEvent()

export const $interviews = createStore<Interview[]>([]).on(
  getInterviewsFx.doneData,
  (state, interviews) =>
    state.concat(
      interviews.results.map(
        (r: InterviewRaw): Interview => ({
          lastLogin: r.last_login,
          email: r.email,
        }),
      ),
    ),
)

$interviews.reset(resetInterviews)

export const $hasNextInterviews = createStore<boolean>(false).on(
  getInterviewsFx.doneData,
  (_, data) => !!data.next,
)

$hasNextInterviews.reset(resetInterviews)
