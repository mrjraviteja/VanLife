import { NavLink,Link } from "react-router-dom"

function Header(){
    return(
        <nav className='navbar'>
            <Link to='/'>#VANLIFE</Link>
            <ul className='navbar-links'>
                <li><NavLink className={({isActive}) => isActive ? "navbar-active" : null} to='/host'>Host</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "navbar-active" : null} to='/about'>About</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? "navbar-active" : null} to='/vans'>Vans</NavLink></li>
            </ul>
        </nav>
    )
}

export default Header