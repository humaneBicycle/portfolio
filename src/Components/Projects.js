import React from "react";
import config from "../config";
import Project from "./Project";

export default function Projects() {
  return (
    <div className="projects">
      <span>03. </span>Things I've worked on
      <ul className="projects_ul">
        {config.projects.map((proj, i) => {
          return (
            <li className="projects_li">
              {i % 2 == 0 ? (
                <>
                  <Project left={true} project={proj} key={i} />
                </>
              ) : (
                <>
                  <Project left={false} project={proj} key={i} />
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
