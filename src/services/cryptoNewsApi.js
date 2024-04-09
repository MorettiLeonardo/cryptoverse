import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeader = {
  'X-RapidAPI-Key': 'f95e4b9d0bmshbbc4542ec00ff92p120fbbjsn0e64321d4a1b',
  'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
}

const baseUrl = 'https://google-news13.p.rapidapi.com/search'

const createRequest = ({ url, headers, params }) => ({
  url: `${url}?${new URLSearchParams(params).toString()}`,
  headers
})

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptosNews: builder.query({
      query: ({ lr, keyword }) =>
        createRequest({
          url: baseUrl,
          headers: cryptoNewsHeader,
          params: { keyword, lr }
        })
    })
  })
})

export const { useGetCryptosNewsQuery } = cryptoNewsApi
