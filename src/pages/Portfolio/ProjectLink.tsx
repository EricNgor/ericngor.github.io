import { OverridedMixpanel } from 'mixpanel-browser';
import React from 'react';
import { ArrowUpRight } from 'react-feather';
import { Link } from 'react-router-dom';

import { ProjectLinkDetails } from './Portfolio';
import './project_link.css';

type ProjectLinkProps = {
  linkDetails: ProjectLinkDetails,
  mixpanel: OverridedMixpanel
}

const linkContent: React.ReactNode = (
  <>
    View Project
    <ArrowUpRight size="24" />
  </>
)

const ProjectLink = ({linkDetails, mixpanel}: ProjectLinkProps): JSX.Element => {
  return (
    <>
      {linkDetails.type === 'external' &&
        <a 
          href={linkDetails.location} 
          className="project-link"
          onClick={() => mixpanel.track('Clicked project link', { _location: linkDetails.location })}
        >
          {linkContent}
        </a>
      }
      {linkDetails.type === 'internal' &&
        <Link 
          to={linkDetails.location} 
          className="project-link"
          onClick={() => mixpanel.track('Clicked project link', { _location: linkDetails.location })}
        >
          {linkContent}
        </Link>
      }
    </>
  );
}

export default ProjectLink;