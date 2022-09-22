import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/nav'
import Home from '../page/home'
import Rerender from '../page/rerender'
import { createBrowserHistory } from 'history'
import Functional from '../page/redux/functional'
export const customHistory = createBrowserHistory()

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redux">
          <Route path="functional" element={<Functional />} />
        </Route>
        <Route path="/rerender" element={<Rerender />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
