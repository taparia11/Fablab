export default function Equipmentcard({props}){
return (
<>
<div className="col-xl-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
<div className="service-item">
  <div className="img">
    <img src={props.img} style={{height: '400px', width: '800px'}}/>
  </div>
  <div className="details position-relative" style={{height: '250px'}}>
    <div className="icon">
      <i className="bi bi-printer-fill"></i>
    </div>
    <a href="/" className="stretched-link">
      <h3>{props.name}</h3>
    </a>
    <p>{props.desc}</p>
  </div>
</div>
</div>
</>
);
}
