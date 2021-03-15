// showProjects.js

import projectCard from './projectCard';

const showProjects = (projects) => {
  projects.forEach((project) => {
    if (project.available) {
      document.querySelector('#projects-page').innerHTML += projectCard(project);
    }
  });
};

export default showProjects;
