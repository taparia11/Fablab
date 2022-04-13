import React from 'react'

const Contact = () => {
  return (
    <>
        <section id="contact" className="contact">
      <div className="container">

        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam occaecati dssumenda quas ut ad dolores adipisci aliquam.</p>
        </div>

      </div>

      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2750.8687265226513!2d80.04298746922916!3d12.822854317061397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f75903807917%3A0x31263222d53b327d!2sSIIC%20FAB%20LAB!5e0!3m2!1sen!2sin!4v1649491806992!5m2!1sen!2sin" frameborder="0" allowfullscreen title='FablabLocation'></iframe>
      </div>

      <div className="container">

        <div className="row gy-5 gx-lg-5">

          <div className="col-lg-4">

            <div className="info">
              <h3>Get in touch</h3>
              <p><h5>Monday - Friday 10:00 AM to 06:00PM</h5></p>

              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>Location:</h4>
                  <p><h5>Fablab , Near Clock Tower, Annexure Campus, SRM Institute of Science and Technology, Potheri, SRM Nagar, Chennai, Tamil Nadu 603203, India</h5></p>
                  </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p><h5>fablab@srmist.edu.in</h5></p>
                </div>
              </div>

              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p><h5>+91 80562-72947</h5></p>
                </div>
              </div>

            </div>

          </div>

          <div className="col-lg-8">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact