// basePage.js
import pageBody from './pageBody';
import projectsArr from '../helpers/data/projects';
import showProjects from './showProjects';

const basePage = () => {
  pageBody();
  showProjects(projectsArr);
};

export default basePage;
