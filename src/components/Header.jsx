// import React, { useState } from 'react'
import "./Style/HomeStyle.css"
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
// import { useState } from "react"

const Header = () => {
    // const [data, setData] = useState("")

    // const ElementData = () => {
    //     setData(localStorage.getItem('email'))
    // }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <h1 className='head'>Nex Store</h1>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                        </ul>

                        <Login/>
                        <Signup />
                        {/* {
                            (data == null ?  : <h4>  {localStorage.getItem("name")}</h4>)
                        } */}
                        <CartBtn />

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
