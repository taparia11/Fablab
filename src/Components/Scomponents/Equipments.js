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
                  <p className="border font-bold p-2">Technology</p>
                  <p className="border p-2">Fused deposition modeling (FDM)</p>
                  <p className="border font-bold p-2">Print head </p>
                  <p className="border p-2">Dual-extrusion print head with an auto nozzle lifting system and swappable print cores</p>
                  <p className="border font-bold p-2">Build volume</p>
                  <p className="border p-2">Left nozzle: 215 x 215 x 200 mm 
                  Right nozzle: 215 x 215 x 200 mm  
                  Dual material: 197 x 215 x 200 mm
                  </p>
                  <p className="border font-bold p-2">Filament diameter</p>
                  <p className="border p-2">2.85 mm</p>
                  <p className="border font-bold p-2">Layer resolution</p>
                  <p className="border p-2">0.25 mm nozzle: 150-60 micron  
                  0.40 mm nozzle: 200-20 micron  
                  0.80 mm nozzle: 600-20 micron 
                  </p>
                  <p className="border font-bold p-2">XYZ accuracy</p>
                  <p className="border p-2">12.5, 12.5, 2.5 micron</p>
                  <p className="border font-bold p-2">Print head travel speed</p>
                  <p className="border p-2">30-300 mm/s</p>
                  <p className="border font-bold p-2">Build speed</p>
                  <p className="border p-2">24 mm³/s</p>
                  <p className="border font-bold p-2">Build plate</p>
                  <p className="border p-2">Heated glass build plate</p>
                  <p className="border font-bold p-2">Build plate temperature</p>
                  <p className="border p-2">20-100 ºC</p>
                  <p className="border font-bold p-2">Build plate leveling</p>
                  <p className="border p-2">Active leveling</p>
                  <p className="border font-bold p-2">Supported materials</p>
                  <p className="border p-2">Nylon, PLA, ABS, CPE, CPE+, PC, TPU 95A, PP,  PVA, Breakaway</p>
                  <p className="border font-bold p-2">Nozzle diameter</p>
                  <p className="border p-2">0.25 mm, 0.40 mm, 0.80 mm</p>
                  <p className="border font-bold p-2">Nozzle temperature</p>
                  <p className="border p-2">80-280 ºC</p>
                  <p className="border font-bold p-2">Nozzle heat up time</p>
                  <p className="border p-2">less than 2 min</p>
                  <p className="border font-bold p-2">Build plate heat up time</p>
                  <p className="border p-2">less than 4 min(20-60 ºC)</p>
                  <p className="border font-bold p-2">Operating sound</p>
                  <p className="border p-2">50 dBA</p>
                  <p className="border font-bold p-2">Material recognition</p>
                  <p className="border p-2">Material recognition with NFC scanner</p>
                  <p className="border font-bold p-2">Connectivity</p>
                  <p className="border p-2">Wi-Fi, LAN, USB port</p>
                  <p className="border font-bold p-2">Monitoring</p>
                  <p className="border p-2">Live camera</p>
                  <p className="border font-bold p-2">Physical dimensions</p>
                  <p className="border p-2">342 x 380 x 389 mm</p>
                  <p className="border font-bold p-2">Net weight</p>
                  <p className="border p-2">10.6 kg</p>
                  
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
                  <p className="border font-bold p-2">Model</p>
                  <p className="border p-2">EVA 43-II</p>
                  <p className="border font-bold p-2">X,Y Cutting Area</p>
                  <p className="border p-2">4 ft. x 3 ft.</p>
                  <p className="border font-bold p-2">Laser Power</p>
                  <p className="border p-2">80W / 100W / 130W</p>
                  <p className="border font-bold p-2">Laser Source</p>
                  <p className="border p-2">Sealed Glass Co2 Laser Tube</p>
                  <p className="border font-bold p-2">Travelling Speed</p>
                  <p className="border p-2">600 mm/s</p>
                  <p className="border font-bold p-2">Reposition Accuracy</p>
                  <p className="border p-2">0.02 mm</p>
                  <p className="border font-bold p-2">Minimum Letter Size</p>
                  <p className="border p-2">1.0 mm (English Font)</p>
                  <p className="border font-bold p-2">X Y Movement System</p>
                  <p className="border p-2">Belt Transmission</p>
                  <p className="border font-bold p-2">Z-Axis Movement</p>
                  <p className="border p-2">Automatic Up to 180 mm (optional)</p>
                  <p className="border font-bold p-2">Power Adjustment</p>
                  <p className="border p-2">1 to 100 %</p>
                  <p className="border font-bold p-2">Driving System</p>
                  <p className="border p-2">Stepper Motor/servo motor</p>
                  <p className="border font-bold p-2">Operating System</p>
                  <p className="border p-2">Win 7/8/10, 32/64 bit</p>
                  <p className="border font-bold p-2">Computer Interface</p>
                  <p className="border p-2">Udisk, USB, Ethernet</p>
                  <p className="border font-bold p-2">Supported Format</p>
                  <p className="border p-2">PLT, DXF, BMP, JPG, AI, DWG, BMP, GIF, HPGL</p>
                  <p className="border font-bold p-2">Compatible Software</p>
                  <p className="border p-2">CorelDRAW, AUTOCAD, Photoshop, Tajima</p>
                  <p className="border font-bold p-2">Working Voltage</p>
                  <p className="border p-2">Single Phase 220-230V / 50Hz-60Hz, 20A Max.</p>
                  <p className="border font-bold p-2">Operating Environment</p>
                  <p className="border p-2">45°C, Humidity 5%-80%</p>
                  <p className="border font-bold p-2">Memory Buffer</p>
                  <p className="border p-2">128 MB</p>
                  <p className="border font-bold p-2">Fume Extraction System</p>
                  <p className="border p-2">External exhaust system with minimum flow rate 1200m3/h (CFM 706 ft3/h). Connection output 4″ Diameter</p>
                  <p className="border font-bold p-2">Overall Dimension (L x W x H)</p>
                  <p className="border p-2">1450 x 1780 x 1070 mm</p>
                  <p className="border font-bold p-2">Weight</p>
                  <p className="border p-2">332 Kg</p>
                  <p className="border font-bold p-2">Power Consumption</p>
                  <p className="border p-2">2 KW</p>
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
                  <p className="border font-bold p-2">Model</p>
                  <p className="border p-2">LX - 1325</p>
                  <p className="border font-bold p-2">Outer Dimension</p>
                  <p className="border p-2">2002 x 3150 x 1541 mm</p>
                  <p className="border font-bold p-2">Working Area (X, Y, Z)</p>
                  <p className="border p-2">1300 x 2500 x 200 mm</p>
                  <p className="border font-bold p-2">Spindle</p>
                  <p className="border p-2">6 KW Air Cooled (HSD Italian)</p>
                  <p className="border font-bold p-2">Spindle Speed</p>
                  <p className="border p-2">18000 RPM</p>
                  <p className="border font-bold p-2">Distance between Bed and Gentry	200 mm</p>
                  <p className="border p-2">200 mm</p>
                  <p className="border font-bold p-2">Maximum Traveling Speed</p>
                  <p className="border p-2">20 mtr/min</p>
                  <p className="border font-bold p-2">Cutting Tool Diameter</p>
                  <p className="border p-2">3 to 20 mm</p>
                  <p className="border font-bold p-2">Repeated Location</p>
                  <p className="border p-2">0.025 mm</p>
                  <p className="border font-bold p-2">Operating System</p>
                  <p className="border p-2">DSP - Hand Held Controller</p>
                  <p className="border font-bold p-2">Driving System</p>
                  <p className="border p-2">Stepper Motor</p>
                  <p className="border font-bold p-2">Weight</p>
                  <p className="border p-2">875 Kg</p>
                  <p className="border font-bold p-2">Power Supply</p>
                  <p className="border p-2">AC 420V/3PH</p>
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
                  <p className="border font-bold p-2">Model</p>
                  <p className="border p-2">GLORIA-EX-1530</p>
                  <p className="border font-bold p-2">Working Area</p>
                  <p className="border p-2">5 feet X 10 feet</p>
                  <p className="border font-bold p-2">Laser Source</p>
                  <p className="border p-2">1000 / 1500 Watt</p>
                  <p className="border font-bold p-2">Laser Type</p>
                  <p className="border p-2">IPG / Raycus Fiber Laser Source</p>
                  <p className="border font-bold p-2">Laser Wavelength</p>
                  <p className="border p-2">1080 nm</p>
                  <p className="border font-bold p-2">Cutting Head</p>
                  <p className="border p-2">Raytools</p>
                  <p className="border font-bold p-2">Max. Cutting Speed</p>
                  <p className="border p-2">30 m/min</p>
                  <p className="border font-bold p-2">Max. Traveling Speed</p>
                  <p className="border p-2">70 m/min</p>
                  <p className="border font-bold p-2">Position Accuracy</p>
                  <p className="border p-2">± 0.04 mm</p>
                  <p className="border font-bold p-2">Minimum Line Width</p>
                  <p className="border p-2">0.12 mm</p>
                  <p className="border font-bold p-2">Cooling System</p>
                  <p className="border p-2">Water Cooling</p>
                  <p className="border font-bold p-2">Drives & Control</p>
                  <p className="border p-2">AC Servo Motor</p>
                  <p className="border font-bold p-2">Working Voltage</p>
                  <p className="border p-2">AC 420V</p>
                  <p className="border font-bold p-2">Weightage</p>
                  <p className="border p-2">3.5	ton</p>
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
