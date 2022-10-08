import React from 'react'
import logo from "../Assets/image/Fablab.svg"
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsMailbox,
  BsTwitter,
} from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <>
    
    <footer id="footer" className="footer">

<div className="footer-content">
  <div className="container">
    <div className="row">

      <div className="basis-1/5 col-lg-3 col-md-6">
        <div className="footer-info">
          <img src={logo} alt="fablab logo" />
          <p>
            Fablab, SRMIST <br/>
            TN 603203, INDIA<br/><br/>
            <strong>Phone:</strong> <a data-testid="linkElement" href="tel:+918056272947" target="_self" aria-disabled="false">+91 80562-72947</a><br/>
            <strong>Email:</strong> <a data-testid="linkElement" href="mailto:fablab@srmist.edu.in" target="_self" aria-disabled="false"><span>fablab@srmist.edu.in</span></a><br/>
          </p>
        </div>
      </div>

      <div className="basis-2/5 col-lg-2 col-md-6 justify-start footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bi bi-chevron-right"></i> <a href="/">Home</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="/">About us</a></li>
          <li><i className="bi bi-chevron-right"></i> <a href="/">Services</a></li>
        </ul>
      </div>
  
      <div className="basis-1/5 col-lg-2 col-md-6 footer-links">
            <h4 className="text-3xl font-ubuntu font-bold">Our Social Network</h4>
            <p id="ffollow">Follow us to get news first in Market!</p>
            <div className="flex flex-row justify-between my-4">
              <a
                className="folink"
                href="https://www.instagram.com/srmfablab/"
                target="_blank"
              >
                <BsInstagram size={35} style={{ color: "white" }} />
              </a>
              <a
                className="folink"
                href="https://www.facebook.com/srmfablab"
                target="_blank"
              >
                <BsFacebook size={35} style={{ color: "white" }} />
              </a>
              <a
                className="folink"
                href="https://www.linkedin.com/showcase/siicfablab/"
                target="_blank"
              >
                <BsLinkedin size={35} style={{ color: "white" }} />
              </a>
              <a
                className="folink"
                href="mailto:manager.fablab@srmist.edu.in"
                target="_blank"
              >
                <HiOutlineMail size={35} style={{ color: "white" }} />
              </a>
            </div>
          </div> 
    
    </div>
  </div>
  <div className="copyright">
         &copy; 2022 Copyright <strong><span>FABLAB</span></strong> All Rights Reserved
      </div>
</div>


</footer>
    </>
  )
}

export default Footer