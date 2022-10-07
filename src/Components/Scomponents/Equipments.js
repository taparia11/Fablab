import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import Service1 from "../../Assets/image/Services/services-1.png";
import Service2 from "../../Assets/image/Services/services-2.png";
import Service3 from "../../Assets/image/Services/services-3.png";
import Service4 from "../../Assets/image/Services/services-4.png";
import Service5 from "../../Assets/image/Services/services-5.png";

const Equipments = () => {
  const [show3dSpecs, setShow3dSpecs] = useState(false);
  const [showLaserSpecs, setShowLaserSpecs] = useState(false);
  const [showEngraverSpecs, setShowEngraverSpecs] = useState(false);
  const [showFiberSpecs, setShowFiberSpecs] = useState(false);
  return (
    <>
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Everything That You Need.</p>
          </div>

          <div className="row gy-5">
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={Service1}
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
                <div
                  className="details position-relative"
                  style={{ height: "250px" }}
                >
                  <div className="icon">
                    <i className="bi bi-printer-fill"></i>
                  </div>
                  <p className="stretched-link">
                    <h3>3D PRINTERS</h3>
                  </p>
                  <p>
                    Equipped with Ultimaker 3<br />
                    VFR Raptor (Delta Printing)
                  </p>
                </div>
                <div className="absolute -bottom-5 left-24">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShow3dSpecs(true);
                    }}
                    className="z-50 bg-green text-white rounded-md px-3 py-2 hover:opacity-90"
                  >
                    Show specs
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={Service2}
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
                <div
                  className="details position-relative"
                  style={{ height: "250px" }}
                >
                  <div className="icon">
                    <i className="bi bi-receipt"></i>
                  </div>
                  <p className="stretched-link">
                    <h3>LASER CUTTING MACHINE</h3>
                  </p>
                  <p>
                    Set up for Making
                    <br />
                    Latest Machine
                  </p>
                </div>
                <div className="absolute -bottom-5 left-24">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowLaserSpecs(true);
                    }}
                    className="z-50 bg-green text-white rounded-md px-3 py-2 hover:opacity-90"
                  >
                    Show specs
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={Service4}
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
                <div
                  className="details position-relative"
                  style={{ height: "250px" }}
                >
                  <div className="icon">
                    <i className="bi bi-door-open-fill"></i>
                  </div>
                  <p className="stretched-link">
                    <h3>CNC ENGRAVER</h3>
                  </p>
                  <p>Heavy machinery for engraving</p>
                  {/* <a href="/" className="stretched-link"></a> */}
                </div>
                <div className="absolute -bottom-5 left-24">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowEngraverSpecs(true);
                    }}
                    className="z-50 bg-green text-white rounded-md px-3 py-2 hover:opacity-90"
                  >
                    Show specs
                  </button>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={Service5}
                    style={{ height: "400px", width: "800px" }}
                  />
                </div>
                <div
                  className="details position-relative"
                  style={{ height: "250px" }}
                >
                  <div className="icon">
                    <i className="bi bi-door-open-fill"></i>
                  </div>
                  <p className="stretched-link">
                    <h3>FIBER LASER METAL CUTTING</h3>
                  </p>
                  <p>Smooth metal cuts with accuracy and precision</p>
                  {/* <a href="/" className="stretched-link"></a> */}
                </div>
                <div className="absolute -bottom-5 left-24">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowFiberSpecs(true);
                    }}
                    className="z-50 bg-green text-white rounded-md px-3 py-2 hover:opacity-90"
                  >
                    Show specs
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {show3dSpecs && (
        <>
          <div
            style={{ background: "rgba(161, 158, 155, 0.47)" }}
            className="fixed flex top-0 bottom-0 left-0 right-0 z-50 items-center justify-center"
          >
            <div
              style={{ background: "white" }}
              className="shadow-xl z-50 rounded-lg fixed top-40 left-40 w-full md:w-4/5 h-3/5 overflow-auto p-10"
            >
              <div className="w-full flex flex-row justify-between">
                <h1 className="text-3xl font-ubuntu font-bold m-3">
                  3D Printer - Technical Specifications
                </h1>
                <button
                  style={{ background: "white" }}
                  onClick={() => setShow3dSpecs(false)}
                >
                  <GrClose size={25} />
                </button>
              </div>
              <div className="w-full flex flex-col my-5">
                <div className="grid grid-cols-2">
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {showLaserSpecs && (
        <>
          <div
            style={{ background: "rgba(161, 158, 155, 0.47)" }}
            className="fixed flex top-0 bottom-0 left-0 right-0 z-50 items-center justify-center"
          >
            <div
              style={{ background: "white" }}
              className="shadow-xl z-50 rounded-lg fixed top-40 left-40 w-full md:w-4/5 h-3/5 overflow-auto p-10"
            >
              <div className="w-full flex flex-row justify-between">
                <h1 className="text-3xl font-ubuntu font-bold m-3">
                  Laser Cutting Machine - Technical Specifications
                </h1>
                <button
                  style={{ background: "white" }}
                  onClick={() => setShowLaserSpecs(false)}
                >
                  <GrClose size={25} />
                </button>
              </div>
              <div className="w-full flex flex-col my-5">
                <div className="grid grid-cols-2">
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {showEngraverSpecs && (
        <>
          <div
            style={{ background: "rgba(161, 158, 155, 0.47)" }}
            className="fixed flex top-0 bottom-0 left-0 right-0 z-50 items-center justify-center"
          >
            <div
              style={{ background: "white" }}
              className="shadow-xl z-50 rounded-lg fixed top-40 left-40 w-full md:w-4/5 h-3/5 overflow-auto p-10"
            >
              <div className="w-full flex flex-row justify-between">
                <h1 className="text-3xl font-ubuntu font-bold m-3">
                  CNC Engraver - Technical Specifications
                </h1>
                <button
                  style={{ background: "white" }}
                  onClick={() => setShowEngraverSpecs(false)}
                >
                  <GrClose size={25} />
                </button>
              </div>
              <div className="w-full flex flex-col my-5">
                <div className="grid grid-cols-2">
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {showFiberSpecs && (
        <>
          <div
            style={{ background: "rgba(161, 158, 155, 0.47)" }}
            className="fixed flex top-0 bottom-0 left-0 right-0 z-50 items-center justify-center"
          >
            <div
              style={{ background: "white" }}
              className="shadow-xl z-50 rounded-lg fixed top-40 left-40 w-full md:w-4/5 h-3/5 overflow-auto p-10"
            >
              <div className="w-full flex flex-row justify-between">
                <h1 className="text-3xl font-ubuntu font-bold m-3">
                  Fiber Laser Metal Cutting - Technical Specifications
                </h1>
                <button
                  style={{ background: "white" }}
                  onClick={() => setShowFiberSpecs(false)}
                >
                  <GrClose size={25} />
                </button>
              </div>
              <div className="w-full flex flex-col my-5">
                <div className="grid grid-cols-2">
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                  <p className="border font-bold p-2">Tech specs</p>
                  <p className="border p-2">lorem</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Equipments;
