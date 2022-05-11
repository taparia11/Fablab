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
                {/* <img src='https://pps.whatsapp.net/v/t61.24694-24/244649946_628035581911149_1413659644928309676_n.jpg?ccb=11-4&oh=01_AVxvVrEltX-XvLQjVSAhmYf8ylz4iJqYtnFbR7bYJP7RPA&oe=62711C59' className="testimonial-img" alt=""/> */}
                <h3>NIKHIL TAPARIA</h3>
                <h4>Software Engineer &amp; Full Stack Developer</h4>
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
                <img src='https://media-exp1.licdn.com/dms/image/D4E35AQHu9ppfkCyD_Q/profile-framedphoto-shrink_800_800/0/1649354292043?e=2147483647&v=beta&t=jQJ8s_CcX9Dttvlx5ObBK9kkNWnqwbUbAbQ2E9WLIvE' className="testimonial-img" alt=""/>
                <h3>Darshil Kantariya</h3>
                <h4>Student</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  Fableb provided me not only infrastructure but they keep guiding me.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src='https://media-exp1.licdn.com/dms/image/C4E03AQG7H_aHvqDhyw/profile-displayphoto-shrink_800_800/0/1621345736168?e=1656547200&v=beta&t=mUQEXj8B42fgmMsHXVgPJoDStYJQzhYg5ZX80U3kMi4' className="testimonial-img" alt=""/>
                <h3>SIddharth Srivastava</h3>
                <h4>Owner Madeeasy</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  FabLab is the place to get inspired from your own ideas, and to bring best out of your creativity.
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </div>
            </div>

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src='https://pps.whatsapp.net/v/t61.24694-24/166048304_187111779678976_2294830755091111867_n.jpg?ccb=11-4&oh=01_AVxvL-JtkQelI8HfQUsGFv3kwBhlMeBkUxZHTBNld0E_yg&oe=62779674' className="testimonial-img" alt=""/>
                <h3>Yuvraj Devnani</h3>
                <h4>Project Head</h4>
                <div className="stars">
                  <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                </div>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  FabLab is only place for whom, those you want to build.
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