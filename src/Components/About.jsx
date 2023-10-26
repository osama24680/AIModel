import React from "react";
import { TbArrowRight } from "react-icons/tb";
import { BiLogoFacebook,BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter,AiOutlineInstagram } from "react-icons/ai";
const About = () => {
  return (
    <div class="container-fluid py-5" id="About">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div class="about-img">
              <img
                class="img-fluid"
                src="https://demo.htmlcodex.com/2696/artificial-intelligence-html-template/img/about-img.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              About Us
            </div>
            <h1 class="mb-4">
              We Make Your Business Smarter with Artificial Intelligence
            </h1>
            <p class="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <p class="mb-4">
              Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
              sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor.
            </p>
            <div class="row g-3">
              <div class="col-sm-6">
                <h6 class="mb-3">
                  <span class="text-primary me-2">
                    {" "}
                    <TbArrowRight />
                  </span>
                  Award Winning
                </h6>
                <h6 class="mb-0">
                  <span class="text-primary me-2">
                    {" "}
                    <TbArrowRight />
                  </span>
                  Professional Staff
                </h6>
              </div>
              <div class="col-sm-6">
                <h6 class="mb-3">
                  <span class="text-primary me-2">
                    {" "}
                    <TbArrowRight />
                  </span>
                  24/7 Support
                </h6>
                <h6 class="mb-0">
                  <span class="text-primary me-2">
                    {" "}
                    <TbArrowRight />
                  </span>
                  Fair Prices
                </h6>
              </div>
            </div>
            <div class="d-flex align-items-center mt-4">
              <a class="btn btn-primary rounded-pill px-4 me-3" href="">
                Read More
              </a>
              <a class="btn btn-outline-primary  me-3 " href="">
                <BiLogoFacebook />
              </a>
              <a class="btn btn-outline-primary  me-3" href="">
                <AiOutlineTwitter />
              </a>
              <a class="btn btn-outline-primary  me-3" href="">
              <AiOutlineInstagram />
              </a>
              <a class="btn btn-outline-primary " href="">
              <BiLogoLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;