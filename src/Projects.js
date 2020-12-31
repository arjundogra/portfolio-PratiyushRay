import React from "react";

function Projects() {
  return (
    <div className="projects">
      <div className="projects_container">
        <p className="projects_title">PROJECTS</p>
        <div className="projects_panel">
          <div className="projects_panel_data">
            <img />
            <p className="project_panel_data_title">Title1</p>
            <div className="project_links">
              <a href="github.com">Github</a>
            </div>
          </div>
          <div className="projects_panel_data">
            <img />
            <p className="project_panel_data_title">Title2</p>
            <div className="project_links">
              <a href="github.com">Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
