import './App.css'
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'
import VanDetail from './components/VanDetail'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './server'

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar'>
      <Link to='/'>#VANLIFE</Link>
        <ul className='navbar-links'>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/vans'>Vans</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/vans' element={<Vans/>} />
        <Route path='/vans/:id' element={<VanDetail/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
