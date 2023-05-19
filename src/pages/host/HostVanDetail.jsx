import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import React from 'react'
import './HostVanDetail.css'

function HostVanDetail(){
    const [hostVan, setHostVan] = React.useState(null)
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setHostVan(data.vans)) 
    }, [params.id])

    return(
        <div className="hostvan-detail-container">
            <Link to=".." relative="path" className="hostvan-detail-back">&larr; <span>Back to all vans</span></Link>
            <div className="hostvan-detail-tile">
                {
                    hostVan ? (
                        <div className="hostvan-detail-full">
                            <div className="hostvan-detail-cover">
                                <img src={hostVan.imageUrl} />
                                <div className="hostvan-detail-info">
                                    <i className="hostvan-detail-type">{hostVan.type}</i>
                                    <h2>{hostVan.name}</h2>
                                    <p className="hostvan-detail-price"><span>${hostVan.price}</span>/day</p>
                                </div>
                            </div>
                            <nav className="hostvan-detail-nav">
                                <ul className="hostvan-detail-nav-links">
                                    <li><NavLink className={({isActive}) => isActive ? "hostvan-detail-nav-links-active" : null} end to='.'>Details</NavLink></li>
                                    <li><NavLink className={({isActive}) => isActive ? "hostvan-detail-nav-links-active" : null} to='pricing'>Pricing</NavLink></li>
                                    <li><NavLink className={({isActive}) => isActive ? "hostvan-detail-nav-links-active" : null} to='photos'>Photos</NavLink></li>
                                </ul>
                            </nav>
                            <Outlet context={{hostVan}}/>
                        </div>
                    ) : <h2>Loading...</h2>
                }
            </div>
        </div>
    )
}

export default HostVanDetail