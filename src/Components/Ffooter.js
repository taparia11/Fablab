import React from 'react'

const Footer = () => {
  return (
    <>
    
    <footer id="footer" className="footer">

<div className="footer-content">
  <div className="container">
    <div className="row">

      <div className="col-lg-3 col-md-6">
        <div className="footer-info">
          <h3>Fablab</h3>
          <p>
            Fablab, SRMIST <br/>
            TN 603203, INDIA<br/><br/>
            <strong>Phone:</strong> <a data-testid="linkElement" href="tel:+918056272947" target="_self" aria-disabled="false">+91 80562-72947</a><br/>
            <strong>Email:</strong> <a data-testid="linkElement" href="mailto:fablab@srmist.edu.in" target="_self" aria-disabled="false"><span>fablab@srmist.edu.in</span></a><br/>
          </p>
        </div>
      </div>

      <div className="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bi bi-chevron-right"></i> <a href="/">Home</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="/">About us</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="/">Services</a></li>
        </ul>
      </div>

    </div>
  </div>
</div>

<div className="footer-legal text-center">
  <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

    <div className="d-flex flex-column align-items-center align-items-lg-start">
      <div className="copyright">
         &copy; 2022 Copyright <strong><span>FABLAB</span></strong>. All Rights Reserved
      </div>
    </div>

    <div className="social-links order-first order-lg-last mb-3 mb-lg-0">
      <a href="/" className="google-plus"><i className="bi bi-envelope-open-fill"></i></a>
      <a href="/" className="linkedin"><i className="bi bi-linkedin"></i></a>
      <a href="/" className="twitter"><i className="bi bi-twitter"></i></a>
      <a href="/" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="/" className="instagram"><i className="bi bi-instagram"></i></a>
    </div>

  </div>
</div>

</footer>
    </>
  )
}

export default Footer