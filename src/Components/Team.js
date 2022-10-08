import React from "react";
import member1 from "../Assets/image/Team/prakash.JPG";
import member2 from "../Assets/image/Team/kiru.jpeg";
import member3 from "../Assets/image/Team/kura.jpeg";
import member4 from "../Assets/image/Team/mani.jpeg";
import member5 from "../Assets/image/Team/siva.jpeg";

const Team = () => {
  const myStyle = {
    height: "300px",
    width: "270px",
    borderRadius: "20px",
    background: "linear-gradient(145deg, #d6d6d9, #ffffff)",
    boxShadow: "17px 17px 28px #8f8f91,-17px -17px 28px #ffffff",
  };
  return (
    <>
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Team</h2>
            <p>Nothing Precious can't be done without the Team.🤝</p>
          </div>

          <div className="row gy-5">
            <div
              className="col-xl-4 col-md-6 d-flex"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="team-member">
                <div className="member-img">
                  <img
                    src={member1}
                    className="img-fluid mx-auto"
                    alt=""
                    style={myStyle}
                  />
                </div>
                <div className="member-info">
                  <div className="social">
                    <a href="mailto:prakashs@srmist.edu.in">
                      <i className="bi bi-envelope-fill"></i>
                    </a>
                    <a
                      target={"_blank"}
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/prakash-s-523b2a10a/"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <h4>Mr. Prakash S</h4>
                  <span>Assistant Ecosystem Development Manager</span>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="team-member mx-auto">
                <div className="member-img">
                  <img
                    src={member2}
                    className="img-fluid"
                    alt=""
                    style={myStyle}
                  />
                </div>
                <div className="member-info">
                  <div className="social">
                    <a href="mailto:kirubakd@srmist.edu.in">
                      <i className="bi bi-envelope-fill"></i>
                    </a>
                    <a
                      target={"_blank"}
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/kirubakaran-d-097a60223/"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <h4>Mr. Kirubakaran D</h4>
                  <span>Technical Assistant, Fablab</span>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="team-member mx-auto">
                <div className="member-img">
                  <img
                    src={member3}
                    className="img-fluid"
                    alt=""
                    style={myStyle}
                  />
                </div>
                <div className="member-info">
                  <div className="social">
                    <a href="mailto:kuralarm1@srmist.edu.in">
                      <i className="bi bi-envelope-fill"></i>
                    </a>
                    {/* <a target={"_blank"} rel="noopener noreferrer" href="">
                      <i className="bi bi-linkedin"></i>
                    </a> */}
                  </div>
                  <h4>Mr. KURAL A</h4>
                  <span>Technical Assistant, Fablab</span>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="team-member mx-auto">
                <div className="member-img">
                  <img
                    src={member4}
                    className="img-fluid"
                    alt=""
                    style={myStyle}
                  />
                </div>
                <div className="member-info">
                  <div className="social">
                    <a href="mailto:manimars@srmist.edu.in">
                      <i className="bi bi-envelope-fill"></i>
                    </a>
                    <a
                      target={"_blank"}
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/mani-maran-3b770818a"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                  <h4>Mr. Mani Maran</h4>
                  <span>Technical Assistant, Fablab</span>
                </div>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div className="team-member mx-auto">
                <div className="member-img">
                  <img
                    src={member5}
                    className="img-fluid"
                    alt=""
                    style={myStyle}
                  />
                </div>
                <div className="member-info">
                <div className="social">
                    <a href="mailto:sivasans4@srmist.edu.in ">
                      <i className="bi bi-envelope-fill"></i>
                    </a>
                    {/* <a
                      target={"_blank"}
                      rel="noopener noreferrer"
                      href=""
                    >
                      <i className="bi bi-linkedin"></i>
                    </a> */}
                  </div>
                  <h4>Mr. Sivasankar S</h4>
                  <span>Technical Assistant, Fablab</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
