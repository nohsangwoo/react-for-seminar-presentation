//custom middleware 사용방법
// 작동방법만 이기고 사실 사용은 안함
const arrowFunctionForm = store => next => action => {
  console.log(action)

  if (action.type === 'counter/increase') {
    console.log(
      'counter/increase이 실행 됐습니다 이 액션이 실행 될때 중간에서 실행되는 메시지 입니다.',
    )
  }
  console.log('/t', store.getState())

  const result = next(action) // 다음 미들웨어 (또는 리듀서) 에게 액션을 전달합니다.
  return result // 여기서 반환하는 값은 dispatch(action)의 결과물이 됩니다. 기본: undefined
}

export default arrowFunctionForm
