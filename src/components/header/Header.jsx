import React, { useState } from 'react'
import  './Header.scss'
import logo from "../../assets/logo.png"
import {BsCart4, BsDisplay, BsSignpostSplit} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import { Routes, Route, Link } from "react-router-dom";
import Home from '../../pages/Home'
import Collections from '../../pages/Collections'
import Details from '../../pages/Details'

function Header () {
    const [showMenu,setShowMenu]=useState(true)
    const toggleMenu = () =>{
        setShowMenu((showMenu)=>!showMenu)
    }
  return (
    <>
    {/* <div className="container">
        <a href='#' className="logo">
            <img src={logo} alt="" />
            <span>Beautify</span>
        </a>

        <div className="right">
            <div className="bars" onClick={toggleMenu}>
                <GiHamburgerMenu/>
            </div>
            <div className="menu" >
                <ul className="nav-menu" style={{display: showMenu ? "none" : "inherit"}}>
                    
                       <li><Link to={"/"}>Home</Link></li>
                       <li><Link to={'/collections'}>Collections</Link></li>
                       <li><Link>Brands</Link></li>
                       <li><Link>Sales</Link></li>
                    
                    
                </ul>
                <input type="text" className="search" placeholder='Search...'/>
            <span><BsCart4 className="cart"/></span>
            </div>

            
        </div>

    </div> */}
<nav className="navbar navbar-expand-lg bg-tranparent">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#"><img src={logo} alt="" />
            <span>Beautify</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={'/collections/'}>Collections</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={''}>Brands</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={''}>Sales</Link>
        </li>
      </ul>
    
      <input type="text" className="search" placeholder='Search...'/>
      <span><BsCart4 className="cart"/></span>
      
    </div>
  </div>
</nav>


    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collections' element={<Collections/>}/>
        <Route path='/collections/product/:id' element={<Details/>}/>
    </Routes>
    </>
  )
}

export default Header