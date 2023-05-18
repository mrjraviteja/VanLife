import React from "react"
import { Link } from 'react-router-dom'
import './Van.css'

function Van(props){
    return(
        <div className="van-tiles">
            <Link to={`/vans/${props.id}`}>
                <img src={props.image}/>
                <div className="van-info">
                    <h3>{props.name}</h3>
                    <h3>${props.price}<span>/day</span></h3>
                </div>
                <i className={`van-type ${props.type} selected`}>{props.type}</i>
            </Link>
        </div>
    )
}

export default Van