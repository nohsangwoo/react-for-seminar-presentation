import { useNavigate } from 'react-router-dom'

function Nav() {
  const navigate = useNavigate()
  return (
    <div>
      <div
        style={{ cursor: 'pointer', border: '1px solid black' }}
        onClick={() => navigate('/')}
      >
        go Home
      </div>
      <div
        style={{ cursor: 'pointer', border: '1px solid black' }}
        onClick={() => navigate('/redux/functional')}
      >
        1. 함수형에서 redux 사용
      </div>
      <div
        style={{ cursor: 'pointer', border: '1px solid black' }}
        onClick={() => navigate('/rerender')}
      >
        go rerender
      </div>
    </div>
  )
}

export default Nav
