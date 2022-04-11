import React from 'react'
import features1 from '../../Assets/image/project/features-1.svg'
import features2 from '../../Assets/image/project/features-2.svg'
import features3 from '../../Assets/image/project/features-3.svg'
import features4 from '../../Assets/image/project/features-4.svg'
import features5 from '../../Assets/image/project/features-5.svg'
import features6 from '../../Assets/image/project/features-6.svg'

const Projects = () => {
  return (
    <>
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <ul className="nav nav-tabs row gy-4 d-flex">

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1" href='/'>
              <i className="bi bi-binoculars color-cyan"></i>
              <h4>SMA</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2" href='/'>
              <i className="bi bi-box-seam color-indigo"></i>
              <h4>Brainwaves</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3" href='/'>
              <i className="bi bi-brightness-high color-teal"></i>
              <h4>Aerem</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4" href='/'>
              <i className="bi bi-command color-red"></i>
              <h4>CAE</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-5" href='/'>
              <i className="bi bi-easel color-blue"></i>
              <h4>AESV</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-6" href='/'>
              <i className="bi bi-map color-orange"></i>
              <h4>ASSR Biomedical</h4>
            </a>
          </li>

        </ul>

        <div className="tab-content">

          <div className="tab-pane active show" id="tab-1">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                <h3>Smart Machine Authorizer</h3>
                <p className="fst-italic">
                  The PSMA is a smart authorizer for easy access of the members of FABLAB. It uses a WiFi switch to control the machine access to the FABLAB machines. The PSMA is mounted near heavy machines and hand held machines it has a mobile app that can be used to pre-book machines and use them at the scheduled time.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Application developed and have successfully run first pilot with Swiggy for product validation.</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <img src={features1} alt="ProjectImage" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-2">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Brainwaves</h3>
                <p className="fst-italic">
                  Application of Virtual Reality to Stroke Rehabilitation. Incorporation of motion sensing using IMU, EMG and EEG. Adopting principles of biofeedback and neurofeedback. Mirror neuron activation.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Testing Stage</li>
                 </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src={features2} alt="ProjectImage" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-3">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Aerem</h3>
                <p className="fst-italic">
                  We have devised a method to solve the inceasing air pollution using micro algae as a bio filter. The micro algae absorbs the excess CO2 and other pollutants in air, thus cleaning the air and producing O2 at the same time. We belive the perfect blend of technology and biology could together solve this deadly problem.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i>Testing Stage</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src={features3} alt="ProjectImage" className="img-fluid"/>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="tab-4">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Compressed Air Engine</h3>
                <p className="fst-italic">
                  This is an pneumatic engine which runs using compressed air as fuel. This air engines will replace the ic engines. Nowadays world is getting into electric vehicles on the lineup we can also tie up with them with this air engine which is non-pollutant
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Prototype</li>
                 </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src={features4} alt="ProjectImage" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-5">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Autonomous Ecological Survey Vehicle</h3>
                <p className="fst-italic">
                  An autonomous surface vehicle that surveys water bodies towards the aim of reversing water pollution and reintroducing lost flora and fauna. The vehicle when deployed will map the parameters such as temperature, acidity, biological content, salinity and overall water quality along the length of the testing area using GPS coordinates. After deployment a report will be prepared from gathered data outlining guidelines for the recovery of the lost ecosystem.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i>Purchase of Materials Completed.</li>
                 </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src={features5} alt="ProjectImage" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-6">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Advanced Self Sanitizing Respirator (Biomedical)</h3>
               <p className="fst-italic">
                Aim is to develop a self-sanitizing respiratory apparatus that prevents the spread of infectious diseases having following objectives. To provide a self-sanitizing respiratory apparatus that is economical in terms of manufacturing. To provide a respiratory apparatus that provides efficient filtration and sterilization of the exhaled air.To provide a self-sanitizing respiratory apparatus that is reusable. To provide a self-sanitizing respiratory apparatus that is wearable.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Prototype</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src={features6} alt="ProjectImage" className="img-fluid"/>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Projects