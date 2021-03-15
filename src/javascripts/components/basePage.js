// basePage.js
import pageBody from './pageBody';
import showProjects from './showProjects';
import getProjects from '../helpers/data/projects';

const basePage = () => {
  pageBody();
  console.warn('basePage');
  getProjects().then((projectsArr) => showProjects(projectsArr));
};

export default basePage;
