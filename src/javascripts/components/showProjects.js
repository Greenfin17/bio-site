// showProjects.js

import projectCard from './projectCard';

const showProjects = (projects) => {
  projects.forEach((project) => {
    document.querySelector('#projects-page').innerHTML += projectCard(project);
  });
};

export default showProjects;
