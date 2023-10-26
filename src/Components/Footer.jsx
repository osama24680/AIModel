import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div class="container-fluid bg-dark text-white-50 footer pt-5">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" class="d-inline-block mb-3">
              <h1 class="text-white">
                AI<span class="text-primary">.</span>Tech
              </h1>
            </a>
            <p class="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor
            </p>
          </div>
          <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
            <h5 class="text-white mb-4">Get In Touch</h5>
            <p>
             123 Street, New York, USA
            </p>
            <p>
              +012 345 67890
            </p>
            <p>
           info@example.com
            </p>
            
          </div>
          <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
            <h5 class="text-white mb-4">Popular Link</h5>
            <a class="btn btn-link" href="">
              About Us
            </a>
            <a class="btn btn-link" href="">
              Contact Us
            </a>
            <a class="btn btn-link" href="">
              Privacy Policy
            </a>
            <a class="btn btn-link" href="">
              Terms & Condition
            </a>
            <a class="btn btn-link" href="">
              Career
            </a>
          </div>
          <div class="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
            <h5 class="text-white mb-4">Our Services</h5>
            <a class="btn btn-link" href="">
              Robotic Automation
            </a>
            <a class="btn btn-link" href="">
              Machine learning
            </a>
            <a class="btn btn-link" href="">
              Predictive Analysis
            </a>
            <a class="btn btn-link" href="">
              Data Science
            </a>
            <a class="btn btn-link" href="">
              Robot Technology
            </a>
          </div>
        </div>
      </div>
      <div class="container wow fadeIn" data-wow-delay="0.1s">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy;{" "}
              <a class="border-bottom" href="#">
                Mayar Magdy
              </a>
              , All Right Reserved.
            </div>
            <div class="col-md-6 text-center text-md-end">
              <div class="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FAQs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
