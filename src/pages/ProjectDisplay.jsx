import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../util/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';

import "../styles/ProjectDisplay.css"


const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt={project.name} />
        <p><b>Techstack:</b> {project.techstack}</p>
        <span><b>About:</b> {project.about}</span>
        <GitHubIcon onClick={() => window.open(project.githubLink, "_blank")}/>
    </div>
  )
}

export default ProjectDisplay