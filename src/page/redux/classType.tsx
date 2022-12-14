import { connect } from 'react-redux'
import withRouteUtils from '@src/HOC/withRouteUtils'
import { NavigateFunction, Params } from 'react-router-dom'
import { RootState } from '@src/store/store'
import counterSlice from '@src/store/reducers/counterSlice'
import { Component } from 'react'

// 여기에선 class 형식의 react component에서 redux를 사용하는 방법을 보여준다.
// 또한 hoc의 개념을 알아본다.
interface OwnProps {
  params?: Readonly<Params<string>>
  location?: Location
  navigate?: NavigateFunction
}

interface StateProps {
  count: number
}

interface DispatchProps {
  increaseNumber: (payload: number) => void
  decreaseNumber: (payload: number) => void
}

interface State {}

type Props = OwnProps & StateProps & DispatchProps

class TestPageClass extends Component<Props> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  componentDidUpdate(prevProps: Props, prevState: State) {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <div>count: {this.props.count}</div>
        <button onClick={() => this.props.increaseNumber(1)}>increase</button>
        <button onClick={() => this.props.decreaseNumber(1)}>decrease</button>
      </>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  count: state.counter.number,
})
const mapDispatchToProps = (dispatch: any) => ({
  increaseNumber: (payload: number) =>
    dispatch(counterSlice.actions.basicIncrease(payload)),
  decreaseNumber: (payload: number) =>
    dispatch(counterSlice.actions.basicDecrease(payload)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouteUtils(TestPageClass))
