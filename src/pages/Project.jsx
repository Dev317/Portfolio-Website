import React from 'react'
import ProjectItem from '../components/ProjectItem'
import { projectList } from '../util/ProjectList'

import '../styles/Project.css'

const Project = () => {
  return (
    <div className="projects">
      <h1>Project Space</h1>

      <div className="projectList">
        {projectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} description={project.about}/>
        })}
      </div>
    </div>
  )
}

export default Project