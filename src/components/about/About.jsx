import React from "react";
// import aboutimg from "../../images/about.jpg";

const About = () => {
  return (
    <section className="about py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* Image Section */}
          {/* <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="head-img"
            >
              <img
                className="img-fluid rounded-circle" // Ensures the image is responsive and circular
                src={aboutimg}
                alt="About me"
                style={{ height: "450px", width: "450px", objectFit: "cover" }} // Added object-fit for perfect circle
              />
            </div>
          </div> */}

          {/* Text Section */}
          <div
            className="col-md-8 text-white d-flex flex-column justify-content-center"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="about-text">
              <h6 className="text-white-50">About Me</h6>
              <h2 className="about-heading text-4xl ">
                A Creative{" "}
                <span className="wordpress-color">
                  UX/UI & Graphic Designer{" "}
                </span>
                <br />
                transforming <span className="wordpress-color">ideas</span> into
                captivating,
                <br />
                user-centric digital experiences.
              </h2>
              <p className="text-white-50 mt-4">
                I am a creative UX/UI and Graphic Designer passionate about
                crafting visually stunning and user-friendly experiences. I
                specialize in designing intuitive interfaces and impactful
                graphics that enhance brand identity and user engagement. Using
                modern tools like Figma, Adobe XD, Photoshop, and Illustrator, I
                bring ideas to life with clean, engaging designs that are both
                functional and aesthetically appealing.
              </p>
            </div>
            <div className="  row mt-4">
              <div className="col-12 col-md-6 mb-3">
                <h6 className="fs-5">
                  <i className="ri-arrow-right-line wordpress-color fs-5"></i>{" "}
                  PS <span className="wordpress-color"> /</span> AI{" "}
                  <span className="wordpress-color"> /</span> ID
                </h6>
                <h6 className="fs-5">
                  <i className="ri-arrow-right-line wordpress-color fs-5"></i>{" "}
                  PP <span className="wordpress-color"> /</span> CapCut
                </h6>
              </div>
              <div className="col-12 col-md-6">
                <h6 className="fs-5">
                  <i className="ri-arrow-right-line wordpress-color fs-5"></i>{" "}
                  Figma <span className="wordpress-color"> /</span> XD
                </h6>
                <h6 className="fs-5">
                  <i className="ri-arrow-right-line wordpress-color fs-5"></i>{" "}
                  WP Customization
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
