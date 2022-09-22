import { BrowserHistory } from 'history'
import { ComponentType, useContext } from 'react'
import {
  useParams,
  useLocation,
  useNavigate,
  UNSAFE_NavigationContext,
} from 'react-router-dom'

interface WrappedProps {
  // 전달받는 컴포넌트의 props
}
const withRouteUtils = <P extends WrappedProps>(
  WrappedComponent: ComponentType<P>,
) => {
  const Component = (props: P) => {
    const params = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const navigation = useContext(UNSAFE_NavigationContext)
      .navigator as BrowserHistory

    return (
      <WrappedComponent
        {...{ ...props, params, location, navigate, navigation }}
      />
    )
  }
  return Component
}

export default withRouteUtils
