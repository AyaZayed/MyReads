import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import MyBooksPage from './components/MyBooksPage'
import Search from './components/Search'
import './css/App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/my-shelf" element={<MyBooksPage />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </>
  )
}
