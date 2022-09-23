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
        1. react 함수형에서 기본적인 redux 사용 방법
      </div>
      <div
        style={{ cursor: 'pointer', border: '1px solid black' }}
        onClick={() => navigate('/redux/classType')}
      >
        2. react 클래스형에서 기본적인 redux 사용 방법
      </div>
      <div
        style={{ cursor: 'pointer', border: '1px solid black' }}
        onClick={() => navigate('/reactquery/axiosusage')}
      >
        3. axios basic example
      </div>
      <div
        style={{ cursor: 'pointer', border: '1px solid black' }}
        onClick={() => navigate('/redux/reduxsagaexample')}
      >
        4. redux saga basic example
      </div>

      <div
        style={{ cursor: 'pointer', border: '1px solid black' }}
        onClick={() => navigate('/reactquery/hook')}
      >
        5. react query hook example
      </div>
    </div>
  )
}

export default Nav
