import React from 'react'
import Service1 from '../../Assets/image/Services/services-1.png'
import Service2 from '../../Assets/image/Services/services-2.png'
import Service3 from '../../Assets/image/Services/services-3.png'

const Equipments = () => {
  return (
    <>
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Our Services</h2>
          <p>Everything That You Need.</p>
        </div>

        <div className="row gy-5">
        <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="service-item">
              <div className="img">
                <img src={Service1} className="img-fluid" alt="" style={{height: '400px', width: '800px'}}/>
              </div>
              <div className="details position-relative" style={{height: '250px'}}>
                <div className="icon">
                  <i className="bi bi-printer-fill"></i>
                </div>
                <a href="/" className="stretched-link">
                  <h3>3D PRINTERS</h3>
                </a>
                <p>Equipped with Ultimaker 3<br/>VFR Raptor (Delta Printing)</p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="service-item">
              <div className="img">
                <img src={Service2} className="img-fluid" alt="" style={{height: '400px', width: '800px'}}/>
              </div>
              <div className="details position-relative" style={{height: '250px'}}>
                <div className="icon">
                  <i className="bi bi-receipt"></i>
                </div>
                <a href="/" className="stretched-link">
                  <h3>LASER CUTTING MACHINE</h3>
                </a>
                <p>Set up for Making<br/>Latest Machine</p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
            <div className="service-item">
              <div className="img">
                <img src={Service3} className="img-fluid" alt="" style={{height: '400px', width: '800px'}}/>
              </div>
              <div className="details position-relative" style={{height: '250px'}}>
                <div className="icon">
                  <i className="bi bi-door-open-fill"></i>
                </div>
                <a href="/" className="stretched-link">
                  <h3>ELECTRONICS ROOM</h3>
                </a>
                <p>Soldering Station<br/>DSO, Multimeter<br/>ICs {'&'} PCB components<br/>Signal generator, SMPS</p>
                {/* <a href="/" className="stretched-link"></a> */}
              </div>
            </div>
          </div>
          </div>
      </div>
    </section>
    </>
  )
}

export default Equipments