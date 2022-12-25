import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectItem = ({ image, name, id, description }) => {
  const navigate = useNavigate();

  return (
    <div className="projectItem" onClick={() => navigate(`/project/${id}`)}>
        <div style={{backgroundImage: `url(${image})`}} className="bgImage">
        </div>
        <h1>
          {name}
        </h1>
        <p>
          {description}
        </p>
    </div>
  )
}

export default ProjectItem