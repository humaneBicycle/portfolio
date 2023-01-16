import React from 'react'
import config from "../config";

export default function Project({left,project}) {
    if(left){
        return (
            <div className='project'>
                <div className="project_image left"><img className="project_image" src={project.image_url} alt="unable to load image"/></div>
                {/* <div className='project_image_gradient'></div> */}
                <div className="project_desc right">
                    <div>
                        <div className="project_overline">Featured Project</div>
                        <div className="project_title">{project.title}</div>
                        <div className="project_description">{project.description}</div>
                        <ul className="project_skills">{
                            project.skills.map((skill,i)=>{
                                return(
                                    <li key={i} className="project_skill">{skill}</li>
                                )
                            })
                        }</ul>
                        <button className="project_button">Learn More</button>
                    </div>
                </div>
            </div>
          )
    }else{
        return (
            <div className='project'>
                <div className="project_image right"><img className="project_image" src={config.projects[0].image_url} alt="unable to load image"/></div>
                {/* <div className='project_image_gradient'></div> */}
                <div className="project_desc left">
                    <div>
                        <div className="project_overline" >Featured Project</div>
                        <div className="project_title">{project.title}</div>
                        <div className="project_description">{project.description}</div>
                        <ul className="project_skills">{
                            project.skills.map((skill,i)=>{
                                return(
                                    <li key={i} className="project_skill">{skill}</li>
                                )
                            })
                        }</ul>
                        <button className="project_button">Learn More</button>
                    </div>
                </div>
            </div>
          )
    }
  
}
