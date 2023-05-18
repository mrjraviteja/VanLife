import { useParams } from "react-router-dom"
import React from 'react'
import './VanDetail.css'

function VanDetail(){
    const params = useParams()
    const [van, setVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    return(
        <div className="van-detail-container">
            {
                van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} />
                        <i className="van-detail-type">{van.type}</i>
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