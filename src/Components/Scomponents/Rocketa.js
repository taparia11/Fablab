import React from 'react'
import Rocket from '../../Assets/image/Rocket.svg'

const Rocketa = () => {
  return (
    <>
    <section id="hero-animated" class="hero-animated d-flex align-items-center">
    <div class="container d-flex flex-column justify-content-center align-items-center text-center position-relative" data-aos="zoom-out">
      <img src="../../Assets/immage/Rocket.svg" alt='RocketImage' class="img-fluid animated"/>
      <h2>Welcome to <span>FabLab</span></h2>
      <p>Innovation and You</p>
      <div class="d-flex">
        <a href="#about" class="btn-get-started scrollto">Get Started</a>
        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
      </div>
    </div>
  </section>
  </>
  )
}

export default Rocketa