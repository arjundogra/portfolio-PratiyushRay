import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

function Projects() {
  return (
    <div className="projects">
      <div className="projects_container">
        <p className="projects_title">PROJECTS</p>
        <div className="projects_panel">
          <div className="projects_panel_data">
            <img src="/UIETapp.jpeg" />
            <p className="project_panel_data_title">UIET KUK App</p>
            <div className="project_links">
              <a href="https://github.com/pratiyushray/UIET-KUK-APP">
                <GitHubIcon />
              </a>
            </div>
          </div>
          <div className="projects_panel_data">
            <img src="/Atenmal.jpeg" />
            <p className="project_panel_data_title">Atenmal</p>
            <div className="project_links">
              <a href="https://github.com/pratiyushray/Atenmal-Device">
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
