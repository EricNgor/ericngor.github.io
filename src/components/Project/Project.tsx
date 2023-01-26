import { OverridedMixpanel } from 'mixpanel-browser';
import React from 'react';
import Lotto from './Lotto';
import { useParams } from 'react-router-dom';
import './project.css';

const projects = new Map([
  ['lottery-simulator', {
    name: 'Lottery Simulator',
    component: <Lotto />
  }]
]);

const Project: React.FC<{mixpanel: OverridedMixpanel}> = ({mixpanel}) => {

  const { projectName } = useParams();
  const project = projects.get(projectName || '');

  return (
    <div className="project-component">
      {project && <h2 className="project-title">{project.name}</h2>}
      {project && project.component}
    </div>
  )
}

export default Project;