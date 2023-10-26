import React from "react";
import { FaGraduationCap, FaRobot, FaBrain } from "react-icons/fa";
import { FiPower } from "react-icons/fi";
const Services = () => {
  return (
    <div class="container-fluid bg-light mt-5 py-5" id="Services">
      <div class="container py-5">
        <div class="row g-5 align-items-start">
          <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Our Services
            </div>
            <h1 class="mb-4">Our Excellent AI Solutions for Your Business</h1>
            <p class="mb-4">
              Our goal is to develop a highly accurate and robust eye gaze
              detection system that surpasses current state-of-the-art
              solutions. By combining our expertise, and innovative approach,
              our project aims to revolutionize human-computer interaction and
              set new standards in eye gaze detection
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
                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div class="service-icon btn-square">
                        <FaRobot style={{ fontSize: "45px" }} />
                      </div>
                      <h5 class="mb-3">Robotic Automation</h5>
                      <p style={{ textAlign: "left" }}>
                        Robotic automation in the context of machine learning
                        models for eye detection empowers computer vision
                        systems to autonomously scan and identify eyes within
                        images or videos. This fusion of robotics and artificial
                        intelligence enhances the accuracy and speed of eye
                        detection, making it a valuable tool for applications
                        like facial recognition and biometric security.
                      </p>
                      <a class="btn px-3 mt-auto mx-auto" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div class="service-icon btn-square">
                        <FiPower style={{ fontSize: "45px" }} />
                      </div>
                      <h5 class="mb-3">Machine learning</h5>
                      <p style={{ textAlign: "left" }}>
                        Our project on eye gaze detection in human-computer
                        interaction offers a unique value proposition. With our
                        expertise in computer vision, machine learning, and
                        human-computer interaction, we bring a multidisciplinary
                        approach to the table. What sets us apart is our
                        commitment to pushing the limits of existing techniques
                        by leveraging the latest advancements in deep learning
                        and neural networks.
                      </p>
                      <a class="btn px-3 mt-auto mx-auto" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6 pt-md-4">
                <div class="row g-4">
                  <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div class="service-icon btn-square">
                        <FaGraduationCap style={{ fontSize: "45px" }} />
                      </div>
                      <h5 class="mb-3">Education & Science</h5>
                      <p style={{ textAlign: "left" }}>
                        What’s the Main Problem⁉
                      </p>
                      <p style={{ textAlign: "left" }}>
                        1.The need to improve the accuracy and reliability of
                        human-computer
                      </p>
                      <p style={{ textAlign: "left" }}>
                        2.Traditional input methods such as keyboards and mice
                        have limitations in capturing the user's intent
                      </p>
                      <p style={{ textAlign: "left" }}>
                        {" "}
                        We can address these challenges and create more seamless
                        and natural interfaces.
                      </p>

                      <a class="btn px-3 mt-auto mx-auto" href="">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div class="col-12 wow fadeIn" data-wow-delay="0.7s">
                    <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                      <div class="service-icon btn-square">
                        <FaBrain style={{ fontSize: "45px" }} />
                      </div>
                      <h5 class="mb-3">Predictive Analysis</h5>
                      <p style={{ textAlign: "left" }}>
                        Technological Advancements: Assess the latest
                        technological advancements in eye gaze detection, such
                        as improved accuracy, real-time tracking, integration
                        with virtual reality (VR) and augmented reality (AR),
                        and miniaturization of hardware. Identify any emerging
                        trends or innovations that could disrupt the market.
                      </p>
                      <a class="btn px-3 mt-auto mx-auto" href="">
                        Read More
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
  );
};

export default Services;
