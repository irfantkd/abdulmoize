import React from "react";
import Experience from "../experience/Experience";
import headimg from "../../images/about.jpg";

const Headtext = () => {
  return (
    <>
      <section>
        <div className="container px-5  ">
          <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-lg-5 col-md-12 text-center text-5xl">
              <div
                data-aos="fade-right"
                data-aos-duration="1000"
                className="head-img "
              >
                <img
                  className="img-fluid rounded-circle" // Ensures the image is responsive and circular
                  src={headimg}
                  alt="About me"
                  style={{
                    height: "450px",
                    width: "450px",
                    objectFit: "cover",
                  }} // Added object-fit for perfect circle
                />
              </div>
            </div>
            {/* Text Section */}
            <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
              <div
                className="text-white head-height"
                data-aos="zoom-in"
                data-aos-duration="1500"
              >
                <p className="fs-5">Hi! 👋 My name is Abdul Moiz</p>
                <h1 className="head-title">
                  UX-UI & Graphic{" "}
                  <span className="wordpress-color">Designer</span>
                </h1>
                <div className="mt-3">
                  <a
                    target="blank"
                    href="https://drive.google.com/file/d/1GpU1UdIsBAFgDvLXK4rWGlX3E1cOZNR1/view?usp=sharing"
                    className="btn btn-primary head-btn"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Component */}
          <Experience />
        </div>
      </section>
    </>
  );
};

export default Headtext;
