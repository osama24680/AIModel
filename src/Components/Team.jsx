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
              Our team is composed of seasoned professionals who bring a wealth
              of expertise and knowledge to every project.
            </p>
            <a class="btn btn-primary rounded-pill px-4" href="#hero">
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
                        src="https://osama24680.github.io/saif_restaurant/images/AhmedAli.jpg"
                        alt=""
                      />
                      <h5 class="mb-0">Ahmed Ali</h5>
                      <small>Facilitator</small>
                      <div class="d-flex justify-content-center mt-3">
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <BiLogoFacebook class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <AiOutlineTwitter class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <AiOutlineInstagram class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
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
                        src="https://osama24680.github.io/saif_restaurant/images/Ebraheem.jpg"
                        alt=""
                      />
                      <h5 class="mb-0">Ibrahem Hossam</h5>
                      <small>Engineer</small>
                      <div class="d-flex justify-content-center mt-3">
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <BiLogoFacebook class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <AiOutlineTwitter class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <AiOutlineInstagram class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
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
                        src="https://osama24680.github.io/saif_restaurant/images/mayar.JPG"
                        alt=""
                      />
                      <h5 class="mb-0">Mayar Magdy</h5>
                      <small>Engineer</small>
                      <div class="d-flex justify-content-center mt-3">
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <BiLogoFacebook class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <AiOutlineTwitter class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <AiOutlineInstagram class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <BiLogoLinkedin class="centerElement" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 wow fadeIn" data-wow-delay="0.7s">
                    <div class="team-item bg-white text-center rounded p-4 pt-0">
                      <img
                        class="img-fluid rounded-circle p-4"
                        src="https://i2.wp.com/ivbm37.ru/wp-content/uploads/2021/02/3-14.jpg"
                        alt=""
                      />
                      <h5 class="mb-0">Abd-Elhady Mohamed</h5>
                      <small>Engineer</small>
                      <div class="d-flex justify-content-center mt-3">
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <BiLogoFacebook class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <AiOutlineTwitter class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
                          <AiOutlineInstagram class="centerElement" />
                        </a>
                        <a
                          class="centerElement btn btn-square btn-primary m-1"
                          href="#hero"
                        >
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
