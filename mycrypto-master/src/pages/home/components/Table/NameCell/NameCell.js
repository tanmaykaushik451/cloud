import React from 'react'
import { Link } from 'react-router-dom'

const NameCell = (props) => {

    const {value,coinid} = props

    return (
            <Link style={{textDecoration:"none"}} to={`/home/${coinid}`}><span className="bold text-dark">{value}</span></Link>
    )
}

export default NameCell
