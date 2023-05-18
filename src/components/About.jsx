import './About.css'
import AboutImage from '../assets/image_54.png'
import { Link } from 'react-router-dom'

function About(){
    return(
        <div className='about-main'>
            <img src={AboutImage} />
            <div className='about-main-text'>
                <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
                <p>
                    Our mission is to enliven your road trip with the perfect travel van rental.
                    Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div className='about-main-box'>    
                <h1>Your destination is waiting.</h1>
                <h1>Your van is ready.</h1>
                <Link to='/vans'>Explore your vans</Link>
            </div>
        </div>
    )
}

export default About