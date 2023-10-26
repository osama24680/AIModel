import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
const Team = () => {
  return (
    <div class="container-fluid bg-light py-5" id="Team">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Our Team
            </div>
            <h1 class="mb-4">Meet Our Experienced Team Members</h1>
            <p class="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
              sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
              et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
              tempor eirmod magna dolore erat amet
            </p>
            <a class="btn btn-primary rounded-pill px-4" href="">
              Read More
            </a>
          </div>
          <div class="col-lg-7">
            <div class="row g-4">
              <div class="col-md-6">
                <div class="row g-4">
                  <div class="col-12 wow fadeIn" data-wow-delay="0.1s">
                    <div class="team-item bg-white text-center rounded p-4 pt-0">
                      <img
                        class="img-fluid rounded-circle p-4"
                        src="https://demo.htmlcodex.com/2696/artificial-intelligence-html-template/img/team-1.jpg"
                        alt=""
                      />
                      <h5 class="mb-0">Boris Johnson</h5>
                      <small>Founder & CEO</small>
                      <div class="d-flex justify-content-center mt-3">
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href=""
                        >
                          <BiLogoFacebook class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href=""
                        >
                          <AiOutlineTwitter class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href=""
                        >
                          <AiOutlineInstagram class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href=""
                        >
                          <BiLogoLinkedin class="centerElement" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div class="team-item bg-white text-center rounded p-4 pt-0">
                      <img
                        class="img-fluid rounded-circle p-4"
                        src="https://demo.htmlcodex.com/2696/artificial-intelligence-html-template/img/team-2.jpg"
                        alt=""
                      />
                      <h5 class="mb-0">Adam Crew</h5>
                      <small>Executive Manager</small>
                      <div class="d-flex justify-content-center mt-3">
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href=""
                        >
                          <BiLogoFacebook class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href=""
                        >
                          <AiOutlineTwitter class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href=""
                        >
                          <AiOutlineInstagram class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href=""
                        >
                          <BiLogoLinkedin class="centerElement" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 pt-md-4">
                <div class="row g-4">
                  <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div class="team-item bg-white text-center rounded p-4 pt-0">
                      <img
                        class="img-fluid rounded-circle p-4"
                        src="https://demo.htmlcodex.com/2696/artificial-intelligence-html-template/img/team-3.jpg"
                        alt=""
                      />
                      <h5 class="mb-0">Kate Winslet</h5>
                      <small>Co Founder</small>
                      <div class="d-flex justify-content-center mt-3">
                        <a class="centerElement btn btn-square btn-primary m-1" href="">
                          <BiLogoFacebook class="centerElement" />
                        </a>
                        <a class="centerElement btn btn-square btn-primary m-1" href="">
                         <AiOutlineTwitter class="centerElement" />
                        </a>
                        <a class="centerElement btn btn-square btn-primary m-1" href="">
                         <AiOutlineInstagram class="centerElement" />
                        </a>
                        <a class="centerElement btn btn-square btn-primary m-1" href="">
                         <BiLogoLinkedin class="centerElement" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 wow fadeIn" data-wow-delay="0.7s">
                    <div class="team-item bg-white text-center rounded p-4 pt-0">
                      <img
                        class="img-fluid rounded-circle p-4"
                        src="https://demo.htmlcodex.com/2696/artificial-intelligence-html-template/img/team-4.jpg"
                        alt=""
                      />
                      <h5 class="mb-0">Cody Gardner</h5>
                      <small>Project Manager</small>
                      <div class="d-flex justify-content-center mt-3">
                        <a class="centerElement btn btn-square btn-primary m-1" href="">
                          <BiLogoFacebook class="centerElement" />
                        </a>
                        <a class="centerElement btn btn-square btn-primary m-1" href="">
                         <AiOutlineTwitter class="centerElement" />
                        </a>
                        <a class="centerElement btn btn-square btn-primary m-1" href="">
                         <AiOutlineInstagram class="centerElement" />
                        </a>
                        <a class="centerElement btn btn-square btn-primary m-1" href="">
                         <BiLogoLinkedin class="centerElement" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
