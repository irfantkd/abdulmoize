import React from 'react'
import wordpressicon from "../../images/wordpress_174881.webp"
import htmlicon from "../../images/html_1051277.webp"
import cssicon from "../../images/css-3_732190.webp"
import bootstrapicon from "../../images/bootstrap_5968672.webp"
import reacticon from "../../images/physics_753244.webp"
import nodeicon from "../../images/cube_137071.webp"
import databaseicon from "../../images/mongodb.webp"
import expressicon from "../../images/express.webp"
import tailwind from "../../images/tailwind.webp"
import jawascript from "../../images/JS.webp"
import github from "../../images/github.png"
import restapi from "../../images/restapi.png"

import SkillsCard from './SkillsCard'

const Skills = () => {
  const Skills = [
    {
      name:"PS",
      img:htmlicon
    },
    {
      name:"AI",
      img:cssicon
    },
    {
      name:"ID",
      img:bootstrapicon
    },
    {
      name:"Canva",
      img:tailwind
    },
    {
      name:"Figma",
      img:jawascript
    },
    {
      name:"XD",
      img:reacticon
    },
    {
      name:"PP",
      img:nodeicon
    },
    {
      name:"CapCut",
      img:expressicon
    },
    {
      name:"WP",
      img:databaseicon
    },
    // {
    //   name:"Rest API",
    //   img:restapi
    // },
    // {
    //   name:"GitHub",
    //   img:github
    // },
    
  ]
    return (
        <>
           <section id='skill'>
  <div className="container">
    <div className="row text-center text-white" data-aos="zoom-in-up" data-aos-duration="1000">
      <h6 className='text-white-50'>Skills</h6>
      <h2 className='about-heading'>
        My Area of <span className='wordpress-color'>Experties <br /></span><br />
      </h2>
    </div>
    
    {/* First Row */}
    <div className="row justify-content-center">
    {
      Skills.map((skill)=>{
return(
  <>
  <SkillsCard skill={skill}/>
  </>
)
      })
    }
      
    </div>
  </div>
</section>

        </>
    )
}

export default Skills