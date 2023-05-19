import React from 'react'
import './HostVans.css'
import { Link } from 'react-router-dom'

function HostVans(){
    const[hostVanData, setHostVanData] = React.useState([])

    React.useEffect(function() {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVanData(data.vans))
    }, [])

    const hostVanElements = hostVanData.map(van => {
        return(
            <Link to={`/host/vans/${van.id}`} key={van.id} className='hostvans-link'>
                <div className='hostvans-tile'>
                    <img src={van.imageUrl}/>
                    <div className='hostvans-tile-info'>
                        <h2>{van.name}</h2>
                        <h3>${van.price}/day</h3>
                    </div>
                </div>
            </Link>
        )
    })

    return(
        <div className='hostvans-container'>
            <h1>Your listed vans</h1>
            {hostVanData.length > 0 ? hostVanElements : <h2>Loading...</h2>}
        </div>
    )
}

export default HostVans