import React, { useEffect } from 'react';
import ProjectLink from './ProjectLink';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './portfolio.css';
import { OverridedMixpanel } from 'mixpanel-browser';
// import React, { useState, useEffect, useRef } from 'react';
export type ProjectLinkDetails = {
  type: string;
  location: string;
}
interface ProjectDetails {
  name: string,
  role: string,
  date: string,
  technologies: string[],
  description: string,
  linkDetails: ProjectLinkDetails,
  imgLink: string
}

const projects: ProjectDetails[] = [
  {
    name: 'PathFinder',
    role: 'Full Stack Engineer & Front End Lead',
    date: 'Mid 2021 - present',
    technologies: ['ReactJS', 'HTML/CSS', 'NodeJS', 'Python'],
    description: 'Web platform built to help people discover their dream career in tech.',
    linkDetails: {
      type: 'external',
      location: 'https://pathfinder.fyi'
    },
    // projectLink: 
    //   <a href="https://pathfinder.fyi" className="view-project">
    //     View Project
    //     <ArrowUpRight size="24" />
    //   </a>,
    imgLink: 'assets/pathfinder/Page1.png'
  },
  // {
  //   name: 'The Odin Project',
  //   role: '',
  //   date: '01/22 - 03/22',
  //   technologies: ['JavaScript', 'HTML/CSS'],
  //   description: 'Series of web projects developed as part of an online course',
  //   imgLink: ''
  // }
];

const Portfolio: React.FC<{mixpanel: OverridedMixpanel}> = ({mixpanel}) => {
  useEffect(() => { // []
    document.title = 'Portfolio | Eric Ngor';
    // const projects: ProjectDetails[] = [{
    //   name: 'PathFinder',
    //   role: 'Full Stack Engineer & Front End Lead',
    //   date: 'Mid 2021 - present',
    //   imgLink: ''
    // }];
    // console.log(projects)

  }, []);

  // function handleScroll(event: React.UIEvent<HTMLDivElement>): void { 

  // }
  
  return (
    <div 
      className="portfolio-component"
      // onScroll={handleScroll(e)}
      >
      <h1 className="main-header">Portfolio</h1>
      <div className="container">
        <section className="projects-container">
          {projects.map((project) => (
            <div className="project" key={project.name}>
              <div className="project-details">
                <h1 className="name">{project.name}</h1>
                <div className="involvement">
                  <div className="role">{project.role}</div>
                  <div className="date">{project.date}</div>
                </div>
                <ul className="technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology} className="technology">{technology}</li>
                  ))}
                  {/* <li className="technology">ReactJS</li> */}
                </ul>
                <article className="details-box">
                  <p className="description">{project.description}</p>
                  <div className="buttons">
                    <ProjectLink linkDetails={project.linkDetails} mixpanel={mixpanel} />
                    {/* {project.projectLink} */}
                    {/* <a href="/" className="view-project">
                      View Project
                      <ArrowUpRight size="24" />
                    </a> */}
                    {/* <a className="case-study">Case Study</a> */}
                  </div>
                </article>
              </div>
            </div>
          ))}

        </section>
        <div className="project-graphic-container">
          <div className="project-graphic-box">
            <img src={projects[0].imgLink} alt={projects[0].name} /> 
          </div>
          {/* <img src={project.imgLink} alt={project.name + ' Graphic'} /> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;