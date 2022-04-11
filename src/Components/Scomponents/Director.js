import React from 'react'
import Shantanu from '../../Assets/image/Shantanu.jpg'

const Director = () => {
    const myStyle = {
        borderRadius:"50px",
        height:"500px",
        background:"#e0e0e0",
        boxShadow:"40px 40px 80px #7b7b7b, -40px -40px 80px #ffffff"
    }

  return (
    <>
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>About Us</h2>
          <p>SRM Fablab is one of a kind, state-of-the-art infrastructure which houses a single multipurpose platform for all kinds of engineering to take shape to fuel Innovation and Entrepreneurship, and engineer ideas into reality. With more than 6000 sq ft of the build area, Fablab contains the latest and the best equipment for digital fabrication for engineering & development of the various mechanical, electrical, automobile, and other engineering projects. The sole purpose of SRM FabLab is to bring together all the components of creating a work of innovation in a single platform. Here you will find, the inventory, working space, and motivation, all under a single roof.</p>
        </div>

        <div className="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-5">
            <div className="about-img">
              <img src={Shantanu} className="img-fluid" alt="" width="380" style={myStyle}/>
            </div>
          </div>

          <div className="col-lg-7">
            <h3 className="pt-0 pt-lg-5">Dr. Shantanu Patil</h3>
            <ul className="nav nav-pills mb-3">
              <li><a className="nav-link active" data-bs-toggle="pill" href="/">ASSOCIATE DIRECTOR, SIIEC</a></li>
            </ul>
            <div className="tab-content">

              <div className="tab-pane fade show active" id="tab1">

                <p className="fst-italic">I am a consummate physician by training, a fastidious scientist by profession and a curious student at heart. My main endeavor is to persevere in improving the outcomes for everyone in the healthcare services.</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Associate Director, SRM Innovation Incubation {'&'} Entrepreneurship Centre</h4>
                </div>
                <p>In a newly donned role of promoting and fostering Entrepreneurship and Startups amongst the students, alumni and faculty members, I am now learning new tools, transforming my older skillsets and augmenting my core expertise within an exciting new ecosystem!</p>

                <div className="d-flex align-items-center mt-4">
                  <i className="bi bi-check2"></i>
                  <h4>Head, Department of Translational Medicine and Research</h4>
                </div>
                <p>My main endeavor is to persevere in improving the outcomes for everyone in the healthcare services : better tools and techniques for the physician , efficient protocols for the nurses and technicians , early and hassle-free rehabilitation for the patients and an evolved process for delivering all of the above.</p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Director