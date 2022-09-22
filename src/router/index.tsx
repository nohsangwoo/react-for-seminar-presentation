import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from '../components/nav'
import Home from '../page/home'
import Rerender from '../page/rerender'

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rerender" element={<Rerender />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
