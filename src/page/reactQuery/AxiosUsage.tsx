import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useAppDispatch } from 'src/store/store'

export const getMyIP = async () => {
  const { data } = await axios.get('http://example.com/movies.json')
  return data.ip
}

const AxiosUsage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      )

      console.log('dasdfsata', data)
    }
    fetchMovies()
  }, [])
  return <div>AxiosUsage</div>
}

export default AxiosUsage
