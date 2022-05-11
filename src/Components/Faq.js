import React from 'react'
import faq from '../Assets/image/faq.jpg'
const Faq = () => {
  return (
    <>
    <section id="faq" className="faq">
      <div className="container-fluid" data-aos="fade-up">

        <div className="row gy-4">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content px-xl-5">
              <h3>Frequently Asked <strong>Questions</strong></h3>
              <p>
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit */}
              </p>
            </div>

            <div className="accordion accordion-flush px-xl-5" id="faqlist">

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                    <i className="bi bi-question-circle question-icon"></i>
                   Is fablab open for all?
                  </button>
                </h3>
                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                 Yes, fablab is open for all Students and Faculty.</div>
                </div>
              </div>

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    <i className="bi bi-question-circle question-icon"></i>
                    Can we access fablab at any time?
                  </button>
                </h3>
                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                  Yes, you can access fablab at any time 24/7 * 365.
                  </div>
                </div>
              </div>

            </div>

          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: `url(${faq})`}}>&nbsp;</div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Faq