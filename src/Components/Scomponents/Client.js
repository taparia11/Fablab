import React from 'react'
import clients1 from '../../Assets/image/clients/client-1.png'
import clients2 from '../../Assets/image/clients/client-2.png'
import clients3 from '../../Assets/image/clients/client-3.png'
import clients4 from '../../Assets/image/clients/client-4.png'
import clients5 from '../../Assets/image/clients/client-5.png'
import clients6 from '../../Assets/image/clients/client-6.png'
import clients7 from '../../Assets/image/clients/client-7.png'
import clients8 from '../../Assets/image/clients/client-8.png'
import clients9 from '../../Assets/image/clients/client-9.png'

const Client = () => {
  return (
    <>
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-out">
          
        <div className="clients-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><a href="https://www.cambrionics.com/"> <img src={clients1} className="img-fluid" alt="client1"/></a></div>
            <div className="swiper-slide"><a href="https://google.com"> <img src={clients2} className="img-fluid" alt="client2"/></a></div>
            <div className="swiper-slide"><a href="https://google.com"> <img src={clients3} className="img-fluid" alt="client3"/></a></div>
            <div className="swiper-slide"><a href="https://www.rizelautomotive.com/"> <img src={clients4} className="img-fluid" alt="client4"/></a></div>
            <div className="swiper-slide"><a href="http://kreator3d.com/"> <img src={clients5} className="img-fluid" alt="client5"/></a></div>
            <div className="swiper-slide"><a href="https://www.mczone.in/McZone/"> <img src={clients6} className="img-fluid" alt="client6"/></a></div>
            <div className="swiper-slide"><a href="https://www.neurindustries.com/"> <img src={clients7} className="img-fluid" alt="client7"/></a></div>
            <div className="swiper-slide"><a href="http://www.fitsurance.in/"> <img src={clients8} className="img-fluid" alt="client8"/></a></div>
            <div className="swiper-slide"><a href="https://webermobility.tech/"> <img src={clients9} className="img-fluid" alt="client9"/></a></div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Client