import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Error404 } from './pages/Error404'
import { History } from './pages/History'
import { Home } from './pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}
