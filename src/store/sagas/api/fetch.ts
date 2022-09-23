import axios from 'axios'

export const getFetchTodos = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos')
  console.log('data!!: ', data)
  return data
}
