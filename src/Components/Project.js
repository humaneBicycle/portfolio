import React from "react";
import config from "../config";
import IconGitHub from "../Icons/github";
import IconExternal from "../Icons/external";

export default function Project({ left, project }) {
  if (left) {
    return (
      <div className="project">
        <div className="project_image left">
          <img
            className="project_image"
            src={project.image_url}
            alt="unable to load image"
          />
          <div className="project_image_gradient" />
        </div>
        {/* <div className='project_image_gradient'></div> */}
        <div className="project_desc right">
          <div>
            <div className="project_overline">Featured Project</div>
            <div className="project_title">{project.title}</div>
            <div className="project_description">{project.description}</div>
            <ul className="project_skills">
              {project.skills.map((skill, i) => {
                return (
                  <li key={i} className="project_skill">
                    {skill}
                  </li>
                );
              })}
            </ul>
            <div className="project_action">
              <a className="project_action_icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.live_link}>
                <IconExternal />
              </a>
              <a className="project_action_icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.github_link}>
                <IconGitHub />
              </a>
            </div>
            {/* <button className="project_button">Learn More</button> */}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="project">
        <div
          className="project_image right flex-end"
          style={{ alignItems: "flex-end" }}
        >
          <img
            className="project_image"
            src={config.projects[0].image_url}
            alt="unable to load image"
          />
          <div className="project_image_gradient" />
        </div>
        {/* <div className='project_image_gradient'></div> */}
        <div className="project_desc left">
          <div>
            <div className="project_overline text_align--left">
              Featured Project
            </div>
            <div className="project_title text_align--left">
              {project.title}
            </div>
            <div
              className="project_description"
              style={{
                textAlign: "left",
                paddingLeft: "1rem",
                paddingRight: "3rem",
              }}
            >
              {project.description}
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <ul className="project_skills" style={{ paddingLeft: "0" }}>
                {project.skills.map((skill, i) => {
                  return (
                    <li
                      key={i}
                      className="project_skill "
                      style={{ float: "left" }}
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
              <div
                className="project_action"
                style={{ justifyContent: "flex-start" }}
              >
                <a
                  className="project_action_icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.live_link}
                >
                  <IconExternal />
                </a>
                <a
                  href={project.github_link}
                  className="project_action_icon"
                  target="_blank"
                >
                  <IconGitHub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
