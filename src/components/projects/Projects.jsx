import React from 'react'
import furni from "../../images/Furni.png"
import foodimg from "../../images/Food product.png"
import beauty from "../../images/Beauty Shop.png"
import blogimg from "../../images/blogsite.png"
import portfolioimg from "../../images/portfolio.png"
import painter from "../../images/Painter.png"
import notetakingapp from "../../images/note-taking-app.webp"
import imdbs from "../../images/IMDBS.webp"
import taskimage from "../../images/task-management-application.webp"

const Projects = () => {
    return (
        <>
  <section className='projects' id='projects'>
  <div className="container">
    <div className="row text-center text-white" data-aos="zoom-in-up" data-aos-duration="1000">
      <h6 className='text-white-50'>Projects</h6>
      <h2 className='about-heading mb-5'>View My Latest <span className='wordpress-color'>Works </span><br /></h2>
    </div>
    <div className="row justify-content-center">
      
      {/* Project Card 1 */}
      <a href='https://irfantkd.github.io/Furnicher-Shop/' target='blank' className="col-lg-4 col-md-6 mb-4 text-decoration-none">
        <div className="project-card" data-aos="zoom-in" data-aos-duration="1000">
          <div className='card-img'>
            <img className='img-fluid' src={furni} alt="Furniture Store" />
          </div>
          <div className='card-text p-4'>
            {/* <p className='wordpress-color'>HTML / CSS / Bootstrap</p> */}
            <h5 className='text-white-50 fw-bold fs-4'>Furniture Store</h5>
          </div>
        </div>
      </a>

      {/* Project Card 2 */}
      <a href='https://food-page-eight.vercel.app/' target='blank' className="col-lg-4 col-md-6 mb-4 text-decoration-none">
        <div className="project-card" data-aos="zoom-in" data-aos-duration="1000">
          <div className='card-img'>
            <img className='img-fluid' src={foodimg} alt="Food Store" />
          </div>
          <div className='card-text p-4'>
            {/* <p className='wordpress-color'>HTML / CSS / Bootstrap</p> */}
            <h5 className='text-white-50 fw-bold fs-4'>Food Store</h5>
          </div>
        </div>
      </a>

      {/* Project Card 3 */}
      <a  target='blank' href='https://painter-one.vercel.app/' className="col-lg-4 col-md-6 mb-4 text-decoration-none">
        <div className="project-card" data-aos="zoom-in" data-aos-duration="1000">
          <div className='card-img'>
            <img className='img-fluid' src={painter} alt="Painter Business Site" />
          </div>
          <div className='card-text p-4'>
            {/* <p className='wordpress-color'>HTML / CSS / Bootstrap</p> */}
            <h5 className='text-white-50 fw-bold fs-4'>Painter Business Site</h5>
          </div>
        </div>
      </a>

      {/* Project Card 4 */}
      <a   href='https://beautystore-orpin.vercel.app/' target='blank' className="col-lg-4 col-md-6 mb-4 text-decoration-none">
        <div className="project-card" data-aos="zoom-in" data-aos-duration="1000">
          <div className='card-img'>
            <img className='img-fluid' src={beauty} alt="Beauty Store" />
          </div>
          <div className='card-text p-4'>
            {/* <p className='wordpress-color'>React</p> */}
            <h5 className='text-white-50 fw-bold fs-4'>Beauty Store</h5>
          </div>
        </div>
      </a>

      {/* Project Card 5 */}
      <a  href='https://blogsite-zeta-nine.vercel.app/' target='blank' className="col-lg-4 col-md-6 mb-4 text-decoration-none">
        <div className="project-card" data-aos="zoom-in" data-aos-duration="1000">
          <div className='card-img'>
            <img className='img-fluid' src={blogimg} alt="Travel Blog Site" />
          </div>
          <div className='card-text p-4'>
            {/* <p className='wordpress-color'>React</p> */}
            <h5 className='text-white-50 fw-bold fs-4'>Travel Blog Site</h5>
          </div>
        </div>
      </a>

      {/* Project Card 6 */}
      <a target='blank' href='https://portfolio-liard-three-93.vercel.app/' className="col-lg-4 col-md-6 mb-4 text-decoration-none ">
        <div className="project-card" data-aos="zoom-in" data-aos-duration="1000">
          <div className='card-img'>
            <img className='img-fluid' src={portfolioimg} alt="Portfolio Design" />
          </div>
          <div className='card-text p-4 d-flex'>
            <div>
            {/* <p className='wordpress-color'>React</p> */}
            <h5 className='text-white-50 fw-bold fs-4'>Portfolio Design</h5>
            </div>
          </div>
        </div>
      </a>
       {/* Project Card 7 */}
      <a target='blank' href='https://note-taking-frontend-ten.vercel.app/' className="col-lg-4 col-md-6 mb-4 text-decoration-none ">
        <div className="project-card" data-aos="zoom-in" data-aos-duration="1000">
          <div className='card-img bg-dark'>
            <img className='img-fluid object-fit-contain' src={notetakingapp} alt="Note takining app" />
          </div>
          <div className='card-text p-4 d-flex'>
            <div>
            {/* <p className='wordpress-color'>React / Node & Express JS / MongoDB</p> */}
            <h5 className='text-white-50 fw-bold fs-4'>Note Taking App</h5>
            </div>
          </div>
        </div>
      </a>
        {/* Project Card 8 */}
      <a href='#' className="col-lg-4 col-md-6 mb-4 text-decoration-none ">
        <div className="project-card" data-aos="zoom-in" data-aos-duration="1000">
          <div className='card-img bg-dark '>
            <img className='img-fluid object-fit-contain ' src={imdbs} alt="IMDBS clone" />
          </div>
          <div className='card-text p-4 d-flex'>
            <div>
            {/* <p className='wordpress-color'>React/ Node & Express JS / MongoDB</p> */}
            <h5 className='text-white-50 fw-bold fs-4'>IMBS Clone </h5>
            </div>
          </div>
        </div>
      </a>
  {/* Project Card 9 */}
      <a href='https://task-manager-app-snowy.vercel.app/' target='blank' className="col-lg-4 col-md-6 mb-4 text-decoration-none ">
        <div className="project-card" data-aos="zoom-in" data-aos-duration="1000">
          <div className='card-img bg-dark '>
            <img className='img-fluid object-fit-contain ' src={taskimage} alt="IMDBS clone" />
          </div>
          <div className='card-text p-4 d-flex'>
            <div>
            {/* <p className='wordpress-color'>React</p> */}
            <h5 className='text-white-50 fw-bold fs-4'>Task Management Application </h5>
            </div>
          </div>
        </div>
      </a>

    </div>
  </div>
</section>


        </>
    )
}

export default Projects