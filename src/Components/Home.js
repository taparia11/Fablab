import React from 'react'
import Navbar from './Scomponents/Navbar'
import Rocket from '../Assets/image/Rocket.svg'

const Home = () => {
  return (
    <>
    <Navbar />
    <section id="hero-animated" className="hero-animated d-flex align-items-center">
    <div className="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
      <img src={Rocket} alt='RocketImage' class="img-fluid animated"/>
      <h2>Welcome to <span>FabLab</span></h2>
      <p>Innovation and You</p>
      <div className="d-flex">
        <a href="#about" className="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
  </section>
    
    </>
  )
}

export default Home