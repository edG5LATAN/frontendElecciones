import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'



function Header() {
    return (
        <ul className="nav nav-underline justify-content-center pt-2 pb-2">
            <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Active</a> */}
                <img className='header_img' src="./images/voto.png" alt="imagen de nav"/>
            </li>
             {/* <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li> */}
             
            <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Elections 2025</a>
            </li>
            <li className="nav-item">
                <Link to={"/vote"} className="nav-link text-danger">Log-Out</Link>
            </li>
            <li className="nav-item">
                <Link to={"/count"} className="nav-link text-primary">Count</Link>
            </li>
            <li className="nav-item">
                <Link to={"/about"} className="nav-link text-primary">About</Link>
            </li>
        </ul>
    )
}

export default Header