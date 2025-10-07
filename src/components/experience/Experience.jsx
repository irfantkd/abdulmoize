import React from "react";

const Experience = () => {
  return (
    <section>
      <div className="container">
        <div
          className="experince-bg-color "
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="row text-center">
            <div className="col-md-4  text-center mob-bg-color">
              <h2 className="exp-fs-size">1+ Years</h2>
              <p className="text-black fs-5">Experience</p>
            </div>
            <div className="col-md-4  text-center mob-bg-color">
              <h2 className="exp-fs-size">11+</h2>
              <p className="text-black fs-5">Complete Class Projects</p>
            </div>
            <div className="col-md-4 text-center mob-bg-color">
              <h2 className="exp-fs-size">90%+</h2>
              <p className="text-black fs-5">Client Satisfactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
