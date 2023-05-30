import './NotFound.css'
import { Link } from 'react-router-dom'

function NotFound(){
    return(
        <div className='not-found-container'>
            <h1 className='not-found-text'>Sorry, the page you were looking for was not found.</h1>
            <Link to='/'>Return to home</Link>
        </div>
    )
}

export default NotFound