import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/nav'
import Home from '../page/home'
import { createBrowserHistory } from 'history'
import Functional from '../page/redux/functional'
import ReduxSagaExample from '../page/redux/ReduxSagaExample'
import ClassType from '@src/page/redux/classType'
import ReactQueryHook from '@src/page/reactQuery/ReactQueryHook'
import AxiosUsage from '@src/page/reactQuery/AxiosUsage'
import Usecallback from '@src/page/rerender/useCallbackIssue'
import Whyneedcodesplitting from '@src/page/rerender/WhyNeedCodeSplitting'

export const customHistory = createBrowserHistory()

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux">
          <Route path="functional" element={<Functional />} />
          <Route path="reduxsagaexample" element={<ReduxSagaExample />} />
          <Route path="classType" element={<ClassType />} />
        </Route>
        <Route path="/reactquery">
          <Route path="axiosusage" element={<AxiosUsage />} />
          <Route path="hook" element={<ReactQueryHook />} />
        </Route>
        <Route path="/rerender">
          <Route
            path="whyneedcodesplitting"
            element={<Whyneedcodesplitting />}
          />
          <Route path="usecallback" element={<Usecallback />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
