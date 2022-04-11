import React from 'react'

const Pricing = () => {
    const mystyle = {
        height: '500px',
        borderRadius: '51px',
        background: "linear-gradient(145deg, #ffffff, #d6d6d9)",
        boxShadow: "13px 13px 5px #626263, -13px -13px 5px #ffffff" 
    }
  return (
    <>
    <section id="pricing" className="pricing">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Our Pricing</h2>
          <p>All the membership plans are valid for six months from the date of subscription. For more information, get in touch with us today.</p>
        </div>

        <div className="row gy-4">
         
         
          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200" >
            <div className="pricing-item featured" style={mystyle} >

              <div className="pricing-header">
                <h3>STUDENT MEMBERSHIP</h3>
                <h4><sup>₹</sup>999</h4>
              </div>

              <ul >            
                <li><i className="bi bi-dot" ></i> <span style={{fontWeight: "600"}}>This is only for Students of the SRM Group of Institutions. </span></li>              
              </ul>

              <div className="text-center mt-auto">
                <a href="/" className="buy-btn">Buy Now</a>
              </div>

            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="pricing-item featured" style={mystyle}>

              <div className="pricing-header">
                <h3>TECH TEAM MEMBERSHIP</h3>
                <h4><sup>₹</sup>299</h4>
              </div>

              <ul>
                <li><i className="bi bi-dot"></i> <span style={{fontWeight: "600"}}>This is only for SRMIST's official technical team members. It's an individual team member's membership.</span></li>
              </ul>

              <div className="text-center mt-auto">
                <a href="/" className="buy-btn">Buy Now</a>
              </div>

            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="600">
            <div className="pricing-item featured" style={mystyle}>

              <div className="pricing-header">
                <h3>STARTUP MEMBERSHIP</h3>
                <h4><sup>₹</sup>199</h4>
              </div>

              <ul>
                <li><i className="bi bi-dot"></i> <span style={{fontWeight: "600"}}>This is only for SIIC incubated startups and NewGen IEDC Supported projects. It's an individual team member's membership.</span></li>
              </ul>

              <div className="text-center mt-auto">
                <a href="/" className="buy-btn">Buy Now</a>
              </div>

            </div>
          </div>
<div> </div>

</div>
<div> </div>
<div className="row gy-4">

  <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
    <div className="pricing-item featured" style={mystyle}>

      <div className="pricing-header">
        <h3>FACULTY MEMBERSHIP</h3>
        <h4><sup>₹</sup>999</h4>
      </div>

      <ul>
        <li><i className="bi bi-dot"></i> <span style={{fontWeight: "600"}}>This is only for Faculties, Ph.D. & Research Scholars of the SRM Group of Institutions. </span></li>
      </ul>

      <div className="text-center mt-auto">
        <a href="/" className="buy-btn">Buy Now</a>
      </div>

    </div>
  </div>

  <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="400">
    <div className="pricing-item featured" style={mystyle}>

      <div className="pricing-header">
        <h3>MEMBERSHIP FOR SRM ALUMNI</h3>
        <h4><sup>₹</sup>299</h4>
      </div>

      <ul>
        <li><i className="bi bi-dot"></i> <span style={{fontWeight: "600"}}>This is applicable only for Alumni of the SRM Group of Institutions. </span></li>
       
      </ul>

      <div className="text-center mt-auto">
        <a href="/" className="buy-btn">Buy Now</a>
      </div>

    </div>
  </div>

  <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="600">
    <div className="pricing-item featured" style={mystyle}>

      <div className="pricing-header">
        <h3>MEMBERSHIP FOR EXTERNAL MEMBER</h3>
        <h4><sup>₹</sup>199</h4>
      </div>

      <ul>
        <li><i className="bi bi-dot"></i> <span style={{fontWeight: "600"}}>Open to all</span></li>
       
      </ul>

      <div className="text-center mt-auto">
        <a href="/" className="buy-btn">Buy Now</a>
      </div>

    </div>
  </div>
  <div> </div>
  </div>
        <div className="row gy-4">

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="200">
            <div className="pricing-item featured" style={mystyle}>

              <div className="pricing-header">
                <h3>A DAY PASS</h3>
                <h4><sup>₹</sup>999</h4>
              </div>

              <ul>
                <li><i className="bi bi-dot"></i> <span style={{fontWeight: "600"}}>Valid for a Day</span></li>
              </ul>

              <div className="text-center mt-auto">
                <a href="/" className="buy-btn">Buy Now</a>
              </div>

            </div>
          </div>

          <div className="col-lg-4" data-aos="zoom-in" data-aos-delay="400">
            <div className="pricing-item featured" style={mystyle}>

              <div className="pricing-header">
                <h3>A WEEK PASS</h3>
                <h4><sup>₹</sup>1499<span> / month</span></h4>
              </div>

              <ul>
                <li><i className="bi bi-dot"></i> <span style={{fontWeight: "600"}}>Valid for a week.</span></li>
              </ul>

              <div className="text-center mt-auto">
                <a href="/" className="buy-btn">Buy Now</a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Pricing