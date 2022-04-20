import React from 'react'
import Fablab from '../../Assets/image/Fablab.svg'

const Navbar = () => {
  return (
    <>
      <header id="header" className="header fixed-top" data-scrollto-offset="0">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <a href="http://localhost:53639/"> <img src={Fablab} alt="fablab-logo" height={70} /></a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto" href="index.html#hero-animated" >Home</a></li>
              <li><a className="nav-link scrollto" href="index.html#about">About</a></li>
              <li><a className="nav-link scrollto" href="index.html#services">Services</a></li>
              <li><a className="nav-link scrollto" href="index.html#pricing">Pricing</a></li>
              <li><a className="nav-link scrollto" href="index.html#faq">FAQ</a></li>
              <li><a className="nav-link scrollto" href="index.html#team">Team</a></li>

              <li><a className="nav-link scrollto" href="index.html#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle d-none"></i>
          </nav>
          <a className="btn-getstarted scrollto" href="/login">Login</a>
        </div>
      </header>    
    </>
  )
}

export default Navbar