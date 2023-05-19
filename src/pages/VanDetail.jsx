import { Link, useParams, useLocation } from "react-router-dom"
import React from 'react'
import './VanDetail.css'

function VanDetail(){
    const params = useParams()
    const location = useLocation()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return(
        <div className="van-detail-container">
            <Link to={`..${search}`} relative="path" className="vans-detail-back">&larr; <span>Back to {type} vans</span></Link>
            {
                van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} />
                        <i className={`van-type-detail ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p className="van-desc">{van.description}</p>
                        <button className="link-button">Rent this Van!</button>
                    </div>
                ) : <h2>Loading...</h2>
            }
        </div>
    )
}

export default VanDetail