import "./ProjectCard.css"
import React from 'react'
import ProjectCard from "./ProjectCard"
import ProjectData from "./ProjectData"

const ProjectCards = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Current Projects</h1>
        <div className="project-container">
            {ProjectData.map((val, index) => {
                return (
                   <ProjectCard 
                   key={index}
                   vidsrc={val.vidsrc}
                   title={val.title}
                   text={val.text}
                   view={val.view}/>
                )    
            })}
        </div>
    </div>
  )
}

export default ProjectCards