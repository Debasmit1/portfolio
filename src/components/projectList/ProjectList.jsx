import React from 'react';
import Project from "../project/Project"
import { projects } from "../../data.js"
import "./projectList.css"

const ProjectList = () => {
  return (
  <div className='pl'>
      <div className="pl-texts">
          <h1 className="pl-title">Hi It's Debasmit</h1>
          <p className="pl-desc">
             Believe living every moment. So here I build a stunning portfolio describing about myself and my interests.
             Hey did I forget to tell you that I love pets and also travelling and exploring places.
          </p>
      </div>
      <div className="pl-list">
          {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
  </div>)
};

export default ProjectList;
