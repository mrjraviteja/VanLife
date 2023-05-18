import { Link, Outlet } from 'react-router-dom'
import './HostLayout.css'

function HostLayout(){
    return(
        <div>
            <nav className='host-navbar'>
                <ul className='host-navbar-links'>
                    <li><Link to='/host'>Dashboard</Link></li>
                    <li><Link to='/host/income'>Income</Link></li>
                    <li><Link to='/host/reviews'>Reviews</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    )
}

export default HostLayout