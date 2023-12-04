import React from 'react'
import { NavLink,Link } from 'react-router-dom'
// import "./Navbar.scss"
import bitcoin from "../../assets/bitcoin.png"
import defaultlogo from "../../assets/defaultlogo.png"
import flag from "../../assets/ca.jpg"

const Navbar = () => {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-black1">
            <img src={defaultlogo} style={{height:"45px",width:"240px",objectFit:"scale-down",marginLeft:"-14px"}}/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {/* <span className="navbar-toggler-icon" /> */}
            <img className="navbar-toggler-icon" src={bitcoin}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="h6 m-0 nav-link " activeClassName='bold' to="/home">Cryptocurrencies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="h6 m-0 nav-link" activeClassName='bold' to="/exchanges">Exchanges</NavLink>
              </li>
            </ul>
            <div  className="Navbar__currency">
              <div  className="Navbar__currency__image">
              <img src={flag} alt="india"/>
              </div>
              <small className="bold">CAD</small>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
