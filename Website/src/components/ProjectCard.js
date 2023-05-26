import "./ProjectCard.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const ProjectCard = (props) => {
  return (
    <div className="project-card">
        <video src={props.vidsrc} muted loop autoPlay></video>
        <h2 className="project-title">{props.title}</h2>
        <div className="details">
            <p>{props.text}</p>
            <div>
                <NavLink to={props.view} className="btn">View</NavLink>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard