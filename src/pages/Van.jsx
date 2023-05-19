import React from "react"
import { Link } from 'react-router-dom'
import './Van.css'

function Van(props){
    return(
        <div className="van-tiles">
            <Link to={props.id} state={{search: `?${props.filter}`, type: props.filtertype}}>
                <img src={props.image}/>
                <div className="van-info">
                    <h3>{props.name}</h3>
                    <h3>${props.price}<span>/day</span></h3>
                </div>
                <button className={`van-type ${props.type} selected`}>{props.type}</button>
            </Link>
        </div>
    )
}

export default Van