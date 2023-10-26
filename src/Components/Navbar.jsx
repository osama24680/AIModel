import React from "react";

const Navbar = () => {
  return (
    <div class="container-fluid sticky-top">
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark p-0">
          <a href="index.html" class="navbar-brand">
            <h1 class="text-white">
              AI<span class="text-dark">.</span>Tech
            </h1>
          </a>
          <button
            type="button"
            class="navbar-toggler ms-auto me-0"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto">
              <a href="#Hero" class="nav-item nav-link active">
                Home
              </a>
              <a href="#About" class="nav-item nav-link">
                About
              </a>
              <a href="#Services" class="nav-item nav-link">
                Services
              </a>
              <a href="#Projects" class="nav-item nav-link">
                Projects
              </a>
              <a href="#Team" class="nav-link nav-item ">
                Team
              </a>

              <a href="#Contact" class="nav-item nav-link">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
