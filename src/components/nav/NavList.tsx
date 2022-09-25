import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavList = () => {
  const navigate = useNavigate()

  const navs = [
    ['go Home', '/'],
    ['react 함수형에서 기본적인 redux 사용 방법', '/redux/functional'],
    ['react 클래스형에서 기본적인 redux 사용 방법', '/redux/classType'],
    ['axios basic example', '/reactquery/axiosusage'],
    ['redux saga basic example', '/redux/reduxsagaexample'],
    ['react query hook example', '/reactquery/hook'],
    ['why need code splitting', '/rerender/whyneedcodesplitting'],
    ['rerender issue example with useCallback', '/rerender/usecallback'],
  ]

  const createNavList = (navs: any[]) => {
    const convertToObj = navs.map((data, index) => {
      return {
        title: `${index + 1}. ${data[0]}`,
        path: data[1],
      }
    })
    return convertToObj
  }

  return (
    <div>
      {createNavList(navs).map((data, index) => {
        return (
          <div
            style={{ cursor: 'pointer', border: '1px solid black' }}
            onClick={() => navigate(data.path)}
          >
            {data.title}
          </div>
        )
      })}
    </div>
  )
}

export default NavList
