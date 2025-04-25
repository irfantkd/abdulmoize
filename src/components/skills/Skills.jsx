import React from "react";
import wp from "../../images/wp.png";
import xd from "../../images/xd.png";
import ps from "../../images/ps.png";
import pr from "../../images/pr.png";
import id from "../../images/id.png";
import figma from "../../images/figma.png";
import canva from "../../images/canva.png";
import ai from "../../images/ai.png";
import capcut from "../../images/capcut.png";

import SkillsCard from "./SkillsCard";

const Skills = () => {
  const Skills = [
    {
      name: "PS",
      img: ps,
    },
    {
      name: "AI",
      img: ai,
    },
    {
      name: "ID",
      img: id,
    },
    {
      name: "Canva",
      img: canva,
    },
    {
      name: "Figma",
      img: figma,
    },
    {
      name: "XD",
      img: xd,
    },
    {
      name: "PR",
      img: pr,
    },
    {
      name: "CapCut",
      img: capcut,
    },
    {
      name: "WP",
      img: wp,
    },
    // {
    //   name:"Rest API",
    //   img:restapi
    // },
    // {
    //   name:"GitHub",
    //   img:github
    // },
  ];
  return (
    <>
      <section id="skill">
        <div className="container">
          <div
            className="row text-center text-white"
            data-aos="zoom-in-up"
            data-aos-duration="1000"
          >
            <h6 className="text-white-50">Skills</h6>
            <h2 className="about-heading">
              My Area of{" "}
              <span className="wordpress-color">
                Experties <br />
              </span>
              <br />
            </h2>
          </div>

          {/* First Row */}
          <div className="row justify-content-center">
            {Skills.map((skill) => {
              return (
                <>
                  <SkillsCard skill={skill} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
