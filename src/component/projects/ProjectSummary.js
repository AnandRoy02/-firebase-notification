import React from 'react'
import moment from 'moment'


const ProjectSummary = ({ project }) => {
    // console.log(project.project.title)
    return (
        <div className="card z-depth-0 project-summmary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary