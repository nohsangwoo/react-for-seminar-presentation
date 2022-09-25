import { useFetchTodos } from './queries'
import Todos from './Todos'
const ReactQueryHookWithQueries = () => {
  const {
    todosData,
    isLoadingTodos,
    refetchTodos,
    isErrorTodos,
    isSuccessTodos,
    iIndex,
    onChangeNumber,
  } = useFetchTodos()

  return (
    <div>
      <input onChange={onChangeNumber} value={iIndex} />
      <button onClick={() => refetchTodos()}>refetch button</button>
      <div>
        {isLoadingTodos ? (
          <div>loading...</div>
        ) : isErrorTodos ? (
          <div>error</div>
        ) : (
          todosData &&
          isSuccessTodos &&
          !isLoadingTodos && (
            <Todos todosData={todosData}/>
          )
        )}
      </div>
    </div>
  )
}

export default ReactQueryHookWithQueries
