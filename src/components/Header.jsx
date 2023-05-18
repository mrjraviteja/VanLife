import { Link } from "react-router-dom"

function Header(){
    return(
        <nav className='navbar'>
            <Link to='/'>#VANLIFE</Link>
            <ul className='navbar-links'>
                <li><Link to='/host'>Host</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/vans'>Vans</Link></li>
            </ul>
        </nav>
    )
}

export default Header