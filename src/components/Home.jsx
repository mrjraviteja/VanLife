import './Home.css'
import { Link } from 'react-router-dom'

function Home(){
    return(
        <div className='home-main'>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <h2>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h2>
            <Link to='/vans'> Find your van </Link>
        </div>
    )
}

export default Home