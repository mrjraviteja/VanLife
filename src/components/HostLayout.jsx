import { NavLink, Outlet } from 'react-router-dom'
import './HostLayout.css'

function HostLayout(){

    return(
        <div>
            <nav className='host-navbar'>
                <ul className='host-navbar-links'>
                    <li><NavLink className={({isActive}) => isActive ? "host-navbar-links-active" : null} end to='.'>Dashboard</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "host-navbar-links-active" : null} to='income'>Income</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "host-navbar-links-active" : null} to='vans'>Vans</NavLink></li>
                    <li><NavLink className={({isActive}) => isActive ? "host-navbar-links-active" : null} to='reviews'>Reviews</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default HostLayout