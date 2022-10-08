import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import Service1 from "../../Assets/image/Services/services-1.png";
import Service2 from "../../Assets/image/Services/services-2.png";
import Service3 from "../../Assets/image/Services/services-3.png";
import Service4 from "../../Assets/image/Services/services-4.png";
import Service5 from "../../Assets/image/Services/services-5.png";
import Service6 from "../../Assets/image/Services/services-6.png";
import Service7 from "../../Assets/image/Services/services-7.png";
import Service8 from "../../Assets/image/Services/services-8.png";

const Equipments = () => {
  const [show3dSpecs, setShow3dSpecs] = useState(false);
  const [showLaserSpecs, setShowLaserSpecs] = useState(false);
  const [showEngraverSpecs, setShowEngraverSpecs] = useState(false);
  const [showFiberSpecs, setShowFiberSpecs] = useState(false);
  const [showLatheSpecs, setShowLatheSpecs] = useState(false);
  const [showMillSpecs, setShowMillSpecs] = useState(false);
  const [showWeldSpecs, setShowWeldSpecs] = useState(false);
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
            <div
              className="col-xl-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="service-item">
                <div className="img">
                  <img
                    src={Service6}
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
                    <h3>LATHE MACHINE</h3>
                  </p>
                  <p>Used to create Objects with symmetry about their axis.</p>
                </div>
                <div className="absolute -bottom-5 left-24">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowLatheSpecs(true);
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
                    src={Service7}
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
                    <h3>MILLING MACHINE</h3>
                  </p>
                  <p>Used to drill, bore, and cut gears, threads, and slots</p>
                  {/* <a href="/" className="stretched-link"></a> */}
                </div>
                <div className="absolute -bottom-5 left-24">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowMillSpecs(true);
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
                    src={Service8}
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
                    <h3>WELDING MACHINES</h3>
                  </p>
                  <p>Wide array of welding machines for multiple purposes</p>
                  {/* <a href="/" className="stretched-link"></a> */}
                </div>
                <div className="absolute -bottom-5 left-24">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowWeldSpecs(true);
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
                  <p className="border p-2">
                    Dual-extrusion print head with an auto nozzle lifting system
                    and swappable print cores
                  </p>
                  <p className="border font-bold p-2">Build volume</p>
                  <p className="border p-2">
                    Left nozzle: 215 x 215 x 200 mm Right nozzle: 215 x 215 x
                    200 mm Dual material: 197 x 215 x 200 mm
                  </p>
                  <p className="border font-bold p-2">Filament diameter</p>
                  <p className="border p-2">2.85 mm</p>
                  <p className="border font-bold p-2">Layer resolution</p>
                  <p className="border p-2">
                    0.25 mm nozzle: 150-60 micron 0.40 mm nozzle: 200-20 micron
                    0.80 mm nozzle: 600-20 micron
                  </p>
                  <p className="border font-bold p-2">XYZ accuracy</p>
                  <p className="border p-2">12.5, 12.5, 2.5 micron</p>
                  <p className="border font-bold p-2">
                    Print head travel speed
                  </p>
                  <p className="border p-2">30-300 mm/s</p>
                  <p className="border font-bold p-2">Build speed</p>
                  <p className="border p-2">less than 24 mm³/s</p>
                  <p className="border font-bold p-2">Build plate</p>
                  <p className="border p-2">Heated glass build plate</p>
                  <p className="border font-bold p-2">
                    Build plate temperature
                  </p>
                  <p className="border p-2">20-100 ºC</p>
                  <p className="border font-bold p-2">Build plate leveling</p>
                  <p className="border p-2">Active leveling</p>
                  <p className="border font-bold p-2">Supported materials</p>
                  <p className="border p-2">
                    Nylon, PLA, ABS, CPE, CPE+, PC, TPU 95A, PP, PVA, Breakaway
                  </p>
                  <p className="border font-bold p-2">Nozzle diameter</p>
                  <p className="border p-2">0.25 mm, 0.40 mm, 0.80 mm</p>
                  <p className="border font-bold p-2">Nozzle temperature</p>
                  <p className="border p-2">80-280 ºC</p>
                  <p className="border font-bold p-2">Nozzle heat up time</p>
                  <p className="border p-2">less than 2 min</p>
                  <p className="border font-bold p-2">
                    Build plate heat up time
                  </p>
                  <p className="border p-2">less than 4 min(20-60 ºC)</p>
                  <p className="border font-bold p-2">Operating sound</p>
                  <p className="border p-2">50 dBA</p>
                  <p className="border font-bold p-2">Material recognition</p>
                  <p className="border p-2">
                    Material recognition with NFC scanner
                  </p>
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
                  <p className="border p-2">
                    Automatic Up to 180 mm (optional)
                  </p>
                  <p className="border font-bold p-2">Power Adjustment</p>
                  <p className="border p-2">1 to 100 %</p>
                  <p className="border font-bold p-2">Driving System</p>
                  <p className="border p-2">Stepper Motor/servo motor</p>
                  <p className="border font-bold p-2">Operating System</p>
                  <p className="border p-2">Win 7/8/10, 32/64 bit</p>
                  <p className="border font-bold p-2">Computer Interface</p>
                  <p className="border p-2">Udisk, USB, Ethernet</p>
                  <p className="border font-bold p-2">Supported Format</p>
                  <p className="border p-2">
                    PLT, DXF, BMP, JPG, AI, DWG, BMP, GIF, HPGL
                  </p>
                  <p className="border font-bold p-2">Compatible Software</p>
                  <p className="border p-2">
                    CorelDRAW, AUTOCAD, Photoshop, Tajima
                  </p>
                  <p className="border font-bold p-2">Working Voltage</p>
                  <p className="border p-2">
                    Single Phase 220-230V / 50Hz-60Hz, 20A Max.
                  </p>
                  <p className="border font-bold p-2">Operating Environment</p>
                  <p className="border p-2">45°C, Humidity 5%-80%</p>
                  <p className="border font-bold p-2">Memory Buffer</p>
                  <p className="border p-2">128 MB</p>
                  <p className="border font-bold p-2">Fume Extraction System</p>
                  <p className="border p-2">
                    External exhaust system with minimum flow rate 1200m3/h (CFM
                    706 ft3/h). Connection output 4″ Diameter
                  </p>
                  <p className="border font-bold p-2">
                    Overall Dimension (L x W x H)
                  </p>
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
                  <p className="border font-bold p-2">
                    Distance between Bed and Gentry 200 mm
                  </p>
                  <p className="border p-2">200 mm</p>
                  <p className="border font-bold p-2">
                    Maximum Traveling Speed
                  </p>
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
                  <p className="border p-2">less than 0.12 mm</p>
                  <p className="border font-bold p-2">Cooling System</p>
                  <p className="border p-2">Water Cooling</p>
                  <p className="border font-bold p-2">Drives & Control</p>
                  <p className="border p-2">AC Servo Motor</p>
                  <p className="border font-bold p-2">Working Voltage</p>
                  <p className="border p-2">AC 420V</p>
                  <p className="border font-bold p-2">Weightage</p>
                  <p className="border p-2">3.5 ton</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {showLatheSpecs && (
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
                  Lathe Machine - Technical Specifications
                </h1>
                <button
                  style={{ background: "white" }}
                  onClick={() => setShowLatheSpecs(false)}
                >
                  <GrClose size={25} />
                </button>
              </div>
              <div className="w-full flex flex-col my-5">
                <div className="grid grid-cols-2">
                  <p className="border font-bold p-2">Model</p>
                  <p className="border p-2">Model-ETM 410</p>
                  <p className="border font-bold p-2">Center height</p>
                  <p className="border p-2">205 mm</p>
                  <p className="border font-bold p-2">Swing over bed</p>
                  <p className="border p-2">410mm</p>
                  <p className="border font-bold p-2">Swing over cross slide</p>
                  <p className="border p-2">255mm</p>
                  <p className="border font-bold p-2">Swing in gap</p>
                  <p className="border p-2">580mm</p>
                  <p className="border font-bold p-2">Length of gap </p>
                  <p className="border p-2">250mm</p>
                  <p className="border font-bold p-2">
                    Distance between centers
                  </p>
                  <p className="border p-2"> 1000mm</p>
                  <p className="border font-bold p-2">Width of bed </p>
                  <p className="border p-2">210mm </p>
                  <p className="border font-bold p-2">HEADSTOCK </p>
                  <p className="border p-2"> </p>
                  <p className="border font-bold p-2">
                    The taper of spindle bore
                  </p>
                  <p className="border p-2"> MT-6 </p>
                  <p className="border font-bold p-2">Range of spindle speed</p>
                  <p className="border p-2"> 16 changes 45-1800rpm </p>
                  <p className="border font-bold p-2"> Spindle Nose </p>
                  <p className="border p-2">D1-6 Camlock</p>
                  <p className="border font-bold p-2"> Spindle Bore </p>
                  <p className="border p-2">52mm</p>
                  <p className="border font-bold p-2">FEEDS AND THREADS </p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">Lead screw pitch</p>
                  <p className="border p-2"> 4 T.P.I</p>
                  <p className="border font-bold p-2">
                    Longitudinal feeds range
                  </p>
                  <p className="border p-2">
                    0.05-1.7mm/ rev (0.002'-0.067'reV)
                  </p>
                  <p className="border font-bold p-2">Cross feeds range </p>
                  <p className="border p-2">
                    0.025-0.85mm/ rev(0.001'-0.0335'rev)
                  </p>
                  <p className="border font-bold p-2"> Metric threads range </p>
                  <p className="border p-2">0.2-14(39 kinds)</p>
                  <p className="border font-bold p-2">Inch threads range </p>
                  <p className="border p-2"> 2-72 T.P.I (45 kinds)</p>
                  <p className="border font-bold p-2">MOTOR </p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">
                    Power of the main motor
                  </p>
                  <p className="border p-2">2.8/3.3kw(3.25/4.4HP) </p>
                  <p className="border font-bold p-2">Power of coolant pump </p>
                  <p className="border p-2"> 0.1kw </p>
                  <p className="border font-bold p-2">TAILSTOCK</p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">
                    Dia. Of tailstock sleeve
                  </p>
                  <p className="border p-2"> 50mm </p>
                  <p className="border font-bold p-2">
                    Travel of tailstock sleeve
                  </p>
                  <p className="border p-2"> 120mm </p>
                  <p className="border font-bold p-2">
                    Morse taper of tailstock sleeve
                  </p>
                  <p className="border p-2"> MT4</p>
                  <p className="border font-bold p-2">DIMENSION AND WEIGHT </p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">
                    Overall dimension (LxWxH) mm
                  </p>
                  <p className="border p-2"> 1940x850x1320 </p>
                  <p className="border font-bold p-2">
                    Packing size (LxWxH) mm
                  </p>
                  <p className="border p-2">2060x900x1640</p>
                  <p className="border font-bold p-2">
                    Net weight/Gross weight
                  </p>
                  <p className="border p-2">1550/1800kgs</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {showWeldSpecs && (
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
                  Lathe Machine - Technical Specifications
                </h1>
                <button
                  style={{ background: "white" }}
                  onClick={() => setShowWeldSpecs(false)}
                >
                  <GrClose size={25} />
                </button>
              </div>
              <div className="w-full flex flex-col my-5">
                <div className="grid grid-cols-2">
                  <p className="border font-bold p-2">ADOR CHAMP 200:</p>
                  <p className="border font-bold p-2"></p>
                  <p className="border font-bold p-2">
                    Technical Specifications
                  </p>
                  <p className="border p-2">Champ 200</p>
                  <p className="border font-bold p-2">Input</p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">Voltage</p>
                  <p className="border p-2">240, +10%, -15%</p>
                  <p className="border font-bold p-2">Phase</p>
                  <p className="border p-2">1</p>
                  <p className="border font-bold p-2">Frequency</p>
                  <p className="border p-2">50/60</p>
                  <p className="border font-bold p-2">Max. Input KVA</p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">
                    at 100% duty Cycle
                  </p>
                  <p className="border p-2">5</p>
                  <p className="border font-bold p-2">Efficiency</p>
                  <p className="border p-2">84</p>
                  <p className="border font-bold p-2">Output</p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">
                    Open Circuit Voltage at 240 Vac
                  </p>
                  <p className="border p-2">68 +/-3</p>
                  <p className="border font-bold p-2">
                    Welding Current Range
                  </p>
                  <p className="border p-2">10-200</p>
                  <p className="border font-bold p-2">
                    Welding Current (40°C 10 minute Cycle)
                  </p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">at 35% duty Cycle</p>
                  <p className="border p-2">200</p>
                  <p className="border font-bold p-2">at 60% duty Cycle</p>
                  <p className="border p-2">150</p>
                  <p className="border font-bold p-2">
                    at 100% duty Cycle
                  </p>
                  <p className="border p-2">120</p>
                  <p className="border font-bold p-2">General</p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">
                    Suitable Welding Electrode size
                  </p>
                  <p className="border p-2">1.6, 2.5, 3.2 and intermittent 4</p>
                  <p className="border font-bold p-2">Hot Start</p>
                  <p className="border p-2">120% of the set current</p>
                  <p className="border font-bold p-2">Antistick</p>
                  <p className="border p-2">Built in</p>
                  <p className="border font-bold p-2">
                    Ingress Protection
                  </p>
                  <p className="border p-2">IP23</p>
                  <p className="border font-bold p-2">Cooling</p>
                  <p className="border p-2">Forced Air</p>
                  <p className="border font-bold p-2">Insulation</p>
                  <p className="border p-2">F</p>
                  <p className="border font-bold p-2">
                    Welding Output Terminals
                  </p>
                  <p className="border p-2">Stud type</p>
                  <p className="border font-bold p-2">Dimensions</p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">Length</p>
                  <p className="border p-2">415</p>
                  <p className="border font-bold p-2">Width</p>
                  <p className="border p-2">155</p>
                  <p className="border font-bold p-2">Height</p>
                  <p className="border p-2">300</p>
                  <p className="border font-bold p-2">Weight</p>
                  <p className="border p-2">7</p>
                  <p className="border font-bold p-2">
                    · ADOR CHAMP MULTI 400:
                  </p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">Parameter</p>
                  <p className="border p-2">Value</p>
                  <p className="border font-bold p-2">
                    Nominal Input Voltage
                  </p>
                  <p className="border p-2">415 V, 3 PH</p>
                  <p className="border font-bold p-2">
                    Input Voltage Range
                  </p>
                  <p className="border p-2">415 (+15% - 10%)</p>
                  <p className="border font-bold p-2">Phase</p>
                  <p className="border p-2">3</p>
                  <p className="border font-bold p-2">Frequency</p>
                  <p className="border p-2">50/60</p>
                  <p className="border font-bold p-2">
                    Efficiency at 100% duty cycle
                  </p>
                  <p className="border p-2">less than 90</p>
                  <p className="border font-bold p-2">
                    Power Factor at 100% duty cycle
                  </p>
                  <p className="border p-2">0.93Max</p>
                  <p className="border font-bold p-2">
                    Open Circuit Voltage In MMA Mode at415v, 3 Phase
                  </p>
                  <p className="border p-2">84 V</p>
                  <p className="border font-bold p-2">
                    Open Circuit Voltage In MIG Mode at415v, 3 Phase
                  </p>
                  <p className="border p-2">55 V</p>
                  <p className="border font-bold p-2">
                    Open Circuit Voltage In TIG Mode at415v, 3 Phase
                  </p>
                  <p className="border p-2">84 V</p>
                  <p className="border font-bold p-2">
                    Welding Current Range In MMA Mode
                  </p>
                  <p className="border p-2">50-400 A</p>
                  <p className="border font-bold p-2">
                    Welding Current Range In TIG Mode
                  </p>
                  <p className="border p-2">10-400</p>
                  <p className="border font-bold p-2">
                    Welding Current Range In MIG Mode
                  </p>
                  <p className="border p-2">40-400</p>
                  <p className="border font-bold p-2">
                    Welding Current at 100% duty cycle (10 minute cycle) Welding
                    Current at 60% duty cycle (10 minute cycle)
                  </p>
                  <p className="border p-2">310 400</p>
                  <p className="border font-bold p-2">
                    Input Power (In MMA Mode) at 100% duty cycle
                  </p>
                  <p className="border p-2">12</p>
                  <p className="border font-bold p-2">
                    Input Power (In MIG Mode) at 100% duty cycle
                  </p>
                  <p className="border p-2">11</p>
                  <p className="border font-bold p-2">
                    Input Power (In TIG Mode) at 100% duty cycle
                  </p>
                  <p className="border p-2">9</p>
                  <p className="border font-bold p-2">
                    Crater Current Range In MIG Mode
                  </p>
                  <p className="border p-2">500-400 A</p>
                  <p className="border font-bold p-2">
                    Crater Current Voltage In MIG Mode
                  </p>
                  <p className="border p-2">14-40 V</p>
                  <p className="border font-bold p-2">Cooling</p>
                  <p className="border p-2">Force d Air</p>
                  <p className="border font-bold p-2">
                    Class of Insulation
                  </p>
                  <p className="border p-2">H</p>
                  <p className="border font-bold p-2">
                    Degree of Protection
                  </p>
                  <p className="border p-2">IP23</p>
                  <p className="border font-bold p-2">
                    Protections Auto Resettable
                  </p>
                  <p className="border p-2">
                    Over Voltage, ervoltage, Single– UndPhasing, Over
                    Temperature
                  </p>
                  <p className="border font-bold p-2">
                    Suitable Welding Electrode Size Dia. - In MMA Mode
                  </p>
                  <p className="border p-2">2.5, 3.2 , 4, 5, 6MM Diameter</p>
                  <p className="border font-bold p-2">
                    Suitable Welding Electrode Size Dia. - In MIG Mode
                  </p>
                  <p className="border p-2">0.8, 1.0, 1.2, 1.6 MM Diameter</p>
                  <p className="border font-bold p-2">
                    Dimensions L x W x H
                  </p>
                  <p className="border p-2">650 x 450 x 570700 x 460 x 650</p>
                  <p className="border font-bold p-2">
                    Auxiliary Outputs On Back Panel
                  </p>
                  <p className="border p-2">
                    110 V – Gas Heater, 230 V – Water Cooling Unit
                  </p>
                  <p className="border font-bold p-2">Front Panel Functions</p>
                  <p className="border p-2">
                    MMA/ MIG /FCAW /TIGProcess SelectionSeparate Switches To
                    Check OCV, Gas Flow & Wire Inch.Selection Switches For Wire
                    Dia, Materials & Ga For Synergic Application.Welding Mode 2t
                    / 4t / Spot / Multispot Selection Switch.Auto/manual
                    Selection Switch.
                  </p>
                  <p className="border font-bold p-2">
                    Front Panel Functions
                  </p>
                  <p className="border p-2">
                    Save & Recall Switches To Save & Recall 10 Programs.Facility
                    To Set Preflow, Post Flow Burnback, Spot & Pause Time Before
                    Welding.3 Digits Digital Display For Voltage and
                    Current.Current Setting By EncoderEncoder For Arc Force
                    Setting With On/ Off Facility Switch Only In MMA Mode.
                  </p>
                  <p className="border font-bold p-2">Remote Control</p>
                  <p className="border p-2">
                    In MMA Mode. Encoder For Arc Force Setting With On/ Off
                    Facility Switch Only In MMA Mode.
                  </p>
                  <p className="border font-bold p-2">
                    Mounting Wheels Of The Power Source
                  </p>
                  <p className="border p-2">
                    Remote Control With Cable For Setting Voltage and Current
                  </p>
                  <p className="border font-bold p-2">Lifting Arrangement</p>
                  <p className="border p-2">Wheel Mount</p>
                  <p className="border font-bold p-2"></p>
                  <p className="border p-2">
                    Front: Swivel, Rear: Fixed Handle Provided
                  </p>
                  <p className="border font-bold p-2">Weight (Approx.)</p>
                  <p className="border p-2">52</p>
                  <p className="border font-bold p-2">
                    · ADOR CHAMP T400:
                  </p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">
                    Technical Specifications
                  </p>
                  <p className="border p-2">Champ T400</p>
                  <p className="border font-bold p-2">Input</p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">Voltage</p>
                  <p className="border p-2">415 , +15%, -10%</p>
                  <p className="border font-bold p-2">Phase</p>
                  <p className="border p-2">3</p>
                  <p className="border font-bold p-2">Frequency</p>
                  <p className="border p-2">50/ 60</p>
                  <p className="border font-bold p-2">
                    Input KVA at 415 Vac
                  </p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">
                    at 100% duty cycle
                  </p>
                  <p className="border p-2">14</p>
                  <p className="border font-bold p-2">at No Load</p>
                  <p className="border p-2">0.24</p>
                  <p className="border font-bold p-2">Power Factor</p>
                  <p className="border p-2">Upto 0.93</p>
                  <p className="border font-bold p-2">Efficiency</p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">Output</p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">
                    Open Circuit Voltage
                  </p>
                  <p className="border p-2">85 V DC</p>
                  <p className="border font-bold p-2">
                    Welding Current Range
                  </p>
                  <p className="border p-2">10-400</p>
                  <p className="border font-bold p-2">
                    Welding Current (40°C)
                  </p>
                  <p className="border p-2"></p>
                  <p className="border font-bold p-2">
                    at 60% duty cycle (10 minute cycle)
                  </p>
                  <p className="border p-2">400</p>
                  <p className="border font-bold p-2">
                    at 100% duty cycle
                  </p>
                  <p className="border p-2">310</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {showMillSpecs && (
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
                  Milling Machine - Technical Specifications
                </h1>
                <button
                  style={{ background: "white" }}
                  onClick={() => setShowMillSpecs(false)}
                >
                  <GrClose size={25} />
                </button>
              </div>
              <div className="w-full flex flex-col my-5">
                <div className="grid grid-cols-2">
                  <p className="border font-bold p-2"> Table size </p>
                  <p className="border p-2">254 x 1270 mm</p>

                  <p className="border font-bold p-2">T-slots ( Qty X Size )</p>
                  <p className="border p-2"> 3 x 16 mm </p>

                  <p className="border font-bold p-2">
                    Longitudinal travel ( X axis ) ( Manual )
                  </p>
                  <p className="border p-2"> 890 mm </p>

                  <p className="border font-bold p-2">
                    Longitudinal travel (Y Axis) ( Auto )
                  </p>
                  <p className="border p-2"> 810 mm </p>

                  <p className="border font-bold p-2"> Cross travel </p>
                  <p className="border p-2"> 406 mm </p>

                  <p className="border font-bold p-2"> Quill travel </p>
                  <p className="border p-2"> 127 mm </p>

                  <p className="border font-bold p-2">
                    Spindle to table nose (D)
                  </p>
                  <p className="border p-2">100 ~ 506 mm</p>

                  <p className="border font-bold p-2">Spindle </p>
                  <p className="border p-2"></p>

                  <p className="border font-bold p-2">Spindle taper</p>
                  <p className="border p-2">
                    NST # 3 0 (or R 8 &amp; NST # 4 0)
                  </p>

                  <p className="border font-bold p-2">
                    Spindle speed(RSPANM) - Stephead
                  </p>
                  <p className="border p-2">
                    50 Hz Low : 66 ~270 High : 550 -2270
                  </p>

                  <p className="border font-bold p-2">
                    Spindle speed(RSPANM) - Variable speed head)
                  </p>
                  <p className="border p-2">
                    50 Hz Low : 50 ~ 420 High : 420 - 3900
                  </p>

                  <p className="border font-bold p-2"> Quill travel </p>
                  <p className="border p-2"> 127 mm </p>

                  <p className="border font-bold p-2"> Ram travel </p>
                  <p className="border p-2"> 560 mm </p>

                  <p className="border font-bold p-2">Over swivel on turret</p>
                  <p className="border p-2"> 360° </p>

                  <p className="border font-bold p-2"> Quill feed (mm/rpm) </p>
                  <p className="border p-2">0.04 mm ~ 0.08 mm ~ 0.14 mm</p>

                  <p className="border font-bold p-2">
                    Head swivel (R &amp; L)
                  </p>
                  <p className="border p-2"> ± 45° </p>

                  <p className="border font-bold p-2">
                    Head tilt (up &amp; down)
                  </p>
                  <p className="border p-2"> ± 45° </p>

                  <p className="border font-bold p-2">Spindle to column (E)</p>
                  <p className="border p-2">159 ~ 719 mm</p>

                  <p className="border font-bold p-2">Feed Rate </p>
                  <p className="border p-2"></p>

                  <p className="border font-bold p-2">
                    X axis rapid speed (mm/min)
                  </p>
                  <p className="border p-2"> Nil </p>

                  <p className="border font-bold p-2"> Lifting speed </p>
                  <p className="border p-2"> Nil </p>

                  <p className="border font-bold p-2">Motor </p>
                  <p className="border p-2"></p>

                  <p className="border font-bold p-2"> Spindle motor </p>
                  <p className="border p-2"> 3 HP </p>

                  <p className="border font-bold p-2"> X axis motor </p>
                  <p className="border p-2">
                    Power feed (Electric or Gear type) (Option)
                  </p>

                  <p className="border font-bold p-2"> Lifting motor </p>
                  <p className="border p-2"> None </p>

                  <p className="border font-bold p-2">Machine Size</p>
                  <p className="border p-2"></p>

                  <p className="border font-bold p-2"> Overall height </p>
                  <p className="border p-2"> 2120 mm </p>

                  <p className="border font-bold p-2"> Overall depth </p>
                  <p className="border p-2"> 1984 mm </p>

                  <p className="border font-bold p-2"> Overall width </p>
                  <p className="border p-2"> 1666 mm </p>

                  <p className="border font-bold p-2"> Net weight </p>
                  <p className="border p-2"> 1200 kg </p>
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
