import React, { CSSProperties } from 'react'
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
    ['react query hook with queries example', '/reactquery/hookwithqueries'],
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

  type styleType = {
    navContainerStyle: CSSProperties
    navItemStyle: CSSProperties
  }
  const style: styleType = {
    navContainerStyle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid black',
      width: '50%',
    },
    navItemStyle: {
      cursor: 'pointer',
      border: '1px solid black',
      margin: '10px',
      padding: '20px',
      borderRadius: '10px',
    },
  }

  return (
    <div style={style.navContainerStyle}>
      {createNavList(navs).map((data, index) => {
        return (
          <div
            key={index}
            style={style.navItemStyle}
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
