import './Vans.css'
import Van from './Van'
import React from 'react'

function Vans(){
    const[vanData, setVanData] = React.useState([])

    React.useEffect(function() {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVanData(data.vans))
    }, [])

    const vanElements = vanData.map(van => {
        return <Van image={van.imageUrl} name={van.name} price={van.price} type={van.type} key={van.id} id={van.id}/>
    })

    return(
        <div className='van-list-container'>
            <center><h1>Explore our van options</h1></center>
            <div className='van-list'>
                {vanElements}
            </div>
        </div>   
    )
}

export default Vans