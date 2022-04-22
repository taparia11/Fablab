import React from 'react'
import Testimonial1 from '../../Assets/image/Testimonials/testimonials-1.jpg'
import Testimonial2 from '../../Assets/image/Testimonials/testimonials-2.jpg'
import Testimonial3 from '../../Assets/image/Testimonials/testimonials-3.jpg'
import Testimonial4 from '../../Assets/image/Testimonials/testimonials-4.jpg'
import Testimonial5 from '../../Assets/image/Testimonials/testimonials-5.jpg'
import background from '../../Assets/image/testimonials-bg.jpg'

const Testimonial = () => {
  return (
    <>
    <section id="testimonials" className="testimonials" style={{backgroundImage: `url(${background})`}}>
      <div className="container" data-aos="fade-up">

        <div className="testimonials-slider swiper">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src='https://pps.whatsapp.net/v/t61.24694-24/244649946_628035581911149_1413659644928309676_n.jpg?ccb=11-4&oh=01_AVxvVrEltX-XvLQjVSAhmYf8ylz4iJqYtnFbR7bYJP7RPA&oe=62711C59' className="testimonial-img" alt=""/>
                <h3>NIKHIL TAPARIA</h3>
                <h4>B.Tech &amp; CSBS</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  I am very happy to give this feedback. when i thought to start my StartUp in SRM i was to nervous how will i get resource here. After some days when i get to know about Fablab i joined that, today i can say Fablab has provided me all resources that i required. Like Machines, Workspace and also they guided me how to use them. 
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src='https://media-exp1.licdn.com/dms/image/C5103AQGACnCVr8ZzMg/profile-displayphoto-shrink_800_800/0/1583952952742?e=1655942400&v=beta&t=gjfF2jDT8PBAYCefKDgIwFvzBYI8O3ZCjG9HGQNo24k' className="testimonial-img" alt=""/>
                <h3>Anant Mishra</h3>
                <h4>Data Analyst&amp; StartUp</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  This is my first StartUp, for my idea i need some large machines and equipments. Fablab is the Only place where i got all these things.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={Testimonial3} className="testimonial-img" alt=""/>
                <h3>Jena Karlis</h3>
                <h4>Store Owner</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={Testimonial4} className="testimonial-img" alt=""/>
                <h3>Matt Brandon</h3>
                <h4>Freelancer</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src={Testimonial5} className="testimonial-img" alt=""/>
                <h3>John Larson</h3>
                <h4>Entrepreneur</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Testimonial