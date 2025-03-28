import React from 'react'

const Resume = () => {
    return (
        <section className='resume-section' id='resume'>
        <div className="container">
           
            <div className="row text-center text-white" data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="col-12">
                    <h6 className='text-white-50'>Resume</h6>
                    <h2 className='about-heading'>MY <span className='wordpress-color'>Academic</span> Record</h2>
                </div>
            </div>
            
           
            <div className='resume-bg-color mt-4 p-4' data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="row">
                   
                    <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                        <div className="d-flex flex-column gap-4">
                             
                         <div className="d-flex align-items-start gap-3">
                                <div className="icon-circle">
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                                <div>
                                    {/* <p className='text-black mb-1'>2024 - BS</p> */}
                                    <h5 className='fs-4 text-black font-style mb-1'>Matric with Science</h5>
                                    <p className='text-black'>SD High School Bahawalpur</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-start gap-3">
                                <div className="icon-circle">
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                                <div>
                                    {/* <p className='text-black mb-1'>2018 - FSC</p> */}
                                    <h5 className='fs-4 text-black font-style mb-1'>ICS</h5>
                                    <p className='text-black'>Allama Iqbal College Bahawalpur </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                
                    <div className="col-lg-6 col-md-12">
                        <div className="d-flex flex-column gap-4"> 
                            <div className="d-flex align-items-start gap-3">
                                <div className="icon-circle">
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                                <div>
                                    <h5 className='fs-4 text-black font-style mb-1'>UXUI Cours</h5>
                                    <p className='text-black'>Courera</p>
                                    
                                </div>
                            </div>
                        
                            <div className="d-flex align-items-start gap-3">
                                <div className="icon-circle">
                                    <i className="ri-arrow-right-up-line"></i>
                                </div>
                                <div>
                                    {/* <p className='text-black mb-1'>2024 - 6 Month Course</p> */}
                                    <h5 className='fs-4 text-black font-style mb-1'>Graphic Designing</h5>
                                    <p className='text-black'>CodeLab Bahawalpur</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    )
}

export default Resume