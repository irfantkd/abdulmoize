import React from 'react'

const SkillsCard = (props) => {
  return (
    <>
     <div className="col-12 col-md-6 col-lg-3">
        <div className='skills-card text-center mt-4' data-aos="zoom-in" data-aos-duration="1000">
          <img src={props.skill.img} alt="HTML" height={50} />
          <h5 className=' mt-4 font-style'>{props.skill.name}</h5>
        </div>
      </div>
    </>
  )
}

export default SkillsCard