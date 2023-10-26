import React from "react";
import {GrLinkNext} from "react-icons/gr"
const Projects = () => {
  return (
    <div class="container-fluid bg-light py-5" id="Projects">
      <div class="container py-5">
        <div
          class="mx-auto text-center wow fadeIn"
          data-wow-delay="0.1s"
          style={{maxWidth: "500px"}}
        >
          <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">
            Case Study
          </div>
          <h1 class="mb-4">Explore Our Recent AI Case Studies</h1>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div class="case-item position-relative overflow-hidden rounded mb-2">
              <img class="img-fluid" src="https://demo.htmlcodex.com/2696/artificial-intelligence-html-template/img/project-1.jpg" alt="" />
              <a class="case-overlay text-decoration-none" href="">
                <small>Robotic Automation</small>
                <h5 class="lh-base text-white mb-3">
                  Lorem elitr magna stet eirmod labore amet labore clita
                </h5>
                <span class="arrowSVG btn btn-square btn-primary">
                  <GrLinkNext  />
                </span>
              </a>
            </div>
          </div>
          <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div class="case-item position-relative overflow-hidden rounded mb-2">
              <img class="img-fluid" src="https://demo.htmlcodex.com/2696/artificial-intelligence-html-template/img/project-2.jpg" alt="" />
              <a class="case-overlay text-decoration-none" href="">
                <small>Machine learning</small>
                <h5 class="lh-base text-white mb-3">
                  Lorem elitr magna stet eirmod labore amet labore clita
                </h5>
                <span class="arrowSVG btn btn-square btn-primary">
                  <GrLinkNext  />
                </span>
              </a>
            </div>
          </div>
          <div class="col-lg-4 wow fadeIn" data-wow-delay="0.7s">
            <div class="case-item position-relative overflow-hidden rounded mb-2">
              <img class="img-fluid" src="https://demo.htmlcodex.com/2696/artificial-intelligence-html-template/img/project-3.jpg" alt="" />
              <a class="case-overlay text-decoration-none" href="">
                <small>Predictive Analysis</small>
                <h5 class="lh-base text-white mb-3">
                  Lorem elitr magna stet eirmod labore amet labore clita
                </h5>
                <span class="arrowSVG btn btn-square btn-primary">
                  <GrLinkNext  class="arrowSVG"/>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
