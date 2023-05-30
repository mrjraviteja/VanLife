import './Vans.css'
import Van from './Van'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { getVans } from '../api'

function Vans(){
    const [vanData, setVanData] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter ? vanData.filter(char => char.type === typeFilter) : vanData

    React.useEffect(function() {
        async function loadVans(){
            setLoading(true)
            try{
                const data = await getVans()
                setVanData(data)
            }
            catch(err){
                setError(err)
            }
            finally{
                setLoading(false)
            }
        }
        loadVans()
    }, [])

    const vanElements = displayedVans.map(van => {
        return <Van image={van.imageUrl} name={van.name} price={van.price} type={van.type} key={van.id} id={van.id} filter={searchParams.toString()} filtertype={typeFilter}/>
    })

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>There was an error: {error.message}</h1>
    }

    return(
        <div className='van-list-container'>
            <center><h1>Explore our van options</h1></center>
            <div className='van-list-filters'>
                <button onClick={() => setSearchParams({type: "simple"})} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>Simple</button>
                <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
                <button onClick={() => setSearchParams({type: "luxury"})} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
                {typeFilter ? (<button onClick={() => setSearchParams({})} className='van-type clear'>Clear</button>) : null}
            </div>
            <div className='van-list'>
                {vanElements}
            </div>
        </div>   
    )
}

export default Vans