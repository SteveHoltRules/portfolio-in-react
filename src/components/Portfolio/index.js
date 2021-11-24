import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: "weather-dashboard",
      description: "Javascript/CSS",
      link: "https://steveholtrules.github.io/WeatherDashboard/",
      repo: "https://github.com/SteveHoltRules/WeatherDashboard",
    },
    {
      name: "book-em",
      description: "Javascript/Express/MySql",
      link: "https://warm-journey-96239.herokuapp.com/login/",
      repo: "https://github.com/Blopez811/schedule-app",
    },
    {
      name: "run-buddy",
      description: "HTML/CSS",
      link: "https://steveholtrules.github.io/run-buddy/",
      repo: "https://github.com/SteveHoltRules/run-buddy",
    },
    {
      name: "team-profile-generator",
      description: "Node/MySql",
      link: "https://github.com/SteveHoltRules/TeamProfileGenerator",
      repo: "https://github.com/SteveHoltRules/TeamProfileGenerator",
    },
    {
      name: "note-takes",
      description: "React/JavaScript/CSS",
      link: "https://github.com/SteveHoltRules/NoteTakes",
      repo: "https://github.com/SteveHoltRules/NoteTakes",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
