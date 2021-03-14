// basePage.js

import self from '../helpers/data/images/Self.jpg';
import html from '../helpers/data/graphics/HTML5_Logo.svg';
import css from '../helpers/data/graphics/css-3.png';
import javascript from '../helpers/data/graphics/javascript-seeklogo.com.svg';
import gitHub from '../helpers/data/graphics/Git-Hub.svg';

const pageBody = () => {
  document.querySelector('#app').innerHTML = `
  <nav class="projects-nav" id="top">
    <h1 >John Maple</h1>
    <ul id="navLinks">
      <li><a id="navToBio" href="#bioPage">Bio</a></li>
      <li><a id="navToTechnologies" href="#technologiesPage">Technologies</a></li>
      <li><a id="navToProjects" href="#projects-heading">Projects</a></li>
    </ul>
  </nav>
  <section class="portrait">
    <img src="${self}" alt="Image of myself, John Maple">
  </section>
  <!-- End Navigation -->

  <!-- Primary View -->
  <div class="fullPage" id="bioPage">
    <h2>About Me</h2>
    <p>I am a musician and long time learner in all things computing. I enjoy the logic of programming and find 
       immersion in code somehow relaxing. As COVID-19 rages and there are no live performances, 
       I have taken the opportunity to enroll at the Nashville Software School. Where this will lead me
       on a practical level, I do not know. But I will know more in the end!</p>
    <!-- TODO: Fill in bio info here: What is your background? Why do you want to go into development? What do you love about development? -->
  </div>
  <div class="fullPage" id="technologiesPage">
    <h2>Technologies</h2>
    <ul class="technologies">
      <li><img src="${html}"<li>
      <li><img src="${css}"></li>
      <li><img src="${javascript}"</li>
      <li><img src="${gitHub}"</li>
    </ul>
    <!-- TODO: Start an UL of all of the tools and technologies you've started learning so far. (You'll beef this page up later). -->
  </div>
  <h2 id="projects-heading">Projects</h2>
  <div class="fullPage d-flex flex-wrap justify-content-around" id="projects-page"></div>
  <!-- End Primary View -->

  <!-- Footer -->
  <footer class="page-footer">
    <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    <!-- TODO: Fill in contact info here: Include things like email, LinkedIn, Twitter and GitHub links. -->
  </footer>`;
};

export default pageBody;
