import React from "react";

const Footer = () => {
  return (
    <section className="bg-[#032628] py-4">
      <div className="container">
        <div className="row align-items-baseline mob-footer-text">
          {/* Contact Details */}
          <div className="col-md-6">
            <div
              className="text-white d-flex gap-4 mob-contect-cen"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <p>
                <span className="wordpress-color fs-5">
                  <i className="ri-phone-fill"></i>
                </span>{" "}
                +92 316 6911575
              </p>
              <p>
                <span className="wordpress-color fs-5">
                  <i className="ri-mail-fill"></i>
                </span>{" "}
                moiz10539@gmail.com
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="col-md-6 mob-social-icon">
            <div
              className="social-icons d-flex gap-4 justify-content-end mob-contect-cen"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/abdul-moiz-781792304"
              >
                <i className="ri-linkedin-fill fs-4"></i>
              </a>
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=61563934746918"
              >
                <i className="ri-facebook-fill fs-4"></i>
              </a> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/designsbymoiz_"
              >
                <i className="ri-instagram-fill fs-4"></i>
              </a>
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/irfantkd"
              >
                <i className="ri-github-fill fs-4"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-white" />

      {/* Copyright Section */}
      <div className="container text-center">
        <p className="text-white">
          Copyright &copy; {new Date().getFullYear()}, All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
