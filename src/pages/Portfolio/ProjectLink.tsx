import React from 'react';
import { ArrowUpRight } from 'react-feather';
import { Link } from 'react-router-dom';

import { ProjectLinkDetails } from './Portfolio';
import './project_link.css';

type ProjectLinkProps = {
  linkDetails: ProjectLinkDetails,
}

const linkContent: React.ReactNode = (
  <>
    View Project
    <ArrowUpRight size="24" />
  </>
)

const ProjectLink = ({linkDetails}: ProjectLinkProps): JSX.Element => {
  return (
    <>
      {linkDetails.type === 'external' &&
        <a href={linkDetails.location} className="project-link">
          {linkContent}
        </a>
      }
      {linkDetails.type === 'internal' &&
        <Link to={linkDetails.location} className="project-link">
          {linkContent}
        </Link>
      }
    </>
    // {linkDetails.type == 'external' &&
    //   <a href="/" className="project-link">

    //   </a>
    // }
    // {}
    // <div className="project-link">
    //   {linkDetails.type}
    // </div>
  );
}

export default ProjectLink;