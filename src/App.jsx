import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetail from './pages/VanDetail'
import Layout from './components/Layout'
import HostLayout from './components/HostLayout'

import Dashboard from './pages/host/Dashboard'
import Income from './pages/host/Income'
import Reviews from './pages/host/Reviews'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './server'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='vans' element={<Vans/>} />
          <Route path='vans/:id' element={<VanDetail/>} />
          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>} />
            <Route path='income' element={<Income/>} />
            <Route path='reviews' element={<Reviews/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
