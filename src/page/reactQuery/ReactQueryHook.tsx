import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export const getMyIP = async () => {
  const { data } = await axios.get('http://example.com/movies.json')
  return data.ip
}

const ReactQueryHook = () => {
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      )
      console.log('data', data)
    }
    fetchMovies()
  }, [])
  return <div>ReactQueryHook</div>
}

export default ReactQueryHook
