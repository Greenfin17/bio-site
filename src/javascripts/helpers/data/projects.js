// projects.js
import amazonPhoto from './images/AlmostAmazon.png';
import tamagotchiPhoto from './images/Tamagotchi.png';
import bearPhoto from './images/BearWatcher.png';
import sortingPhoto from './images/SortingHat.png';
import petPhoto from './images/PetAdoption.png';
import skiPhoto from './images/SkiShop.png';
import pinterest from './images/AlmostPinterest.png';

const projects = [
  {
    id: 0,
    title: 'Almost Pinterest',
    screenshot: pinterest,
    altText: 'Screen shot of Almost Pinterest project',
    description: 'App that allows a user to save nd organize sites into categories',
    technologiesUsed: 'HTML, CSS, Javascript, Github for version control',
    available: true,
    url: 'https://friendly-dijkstra-f5e799.netlify.app/',
    githubUrl: 'https://github.com/Greenfin17/ASSIGNMENT-Firebase-Pinterest'
  },
  {
    id: 1,
    title: 'Almost Amazon',
    screenshot: amazonPhoto,
    altText: 'Screen shot of Almost Amazon project',
    description: 'App that allows a user to track books and authors',
    technologiesUsed: 'HTML, CSS, Javascript, Github for version control',
    available: true,
    url: 'https://unruffled-morse-7d9b48.netlify.app/',
    githubUrl: 'https://github.com/Greenfin17/IN-CLASS-almost-amazon-template'
  },
  {
    id: 2,
    title: 'Tamagotchi',
    screenshot: tamagotchiPhoto,
    altText: 'Screen shot of Tamagotchi project',
    description: 'Game that mimics the Tamagotchi toy of the nineties',
    technologiesUsed: 'HTML, CSS, Javascript, Github for version control',
    available: true,
    url: 'https://jm-e-pet-tamagotchi.netlify.app/',
    githubUrl: 'https://github.com/Greenfin17/ASSIGNMENT-Tamagotchi'
  },
  {
    id: 3,
    title: 'Bear Watcher',
    screenshot: bearPhoto,
    altText: 'Screen shot of Bear Watcher project',
    description: 'Tool for tracking the fishing activiteis of bears in real time.',
    technologiesUsed: 'HTML, CSS, Javascript, Github for version control',
    available: true,
    url: 'https://jm-bear-watcher.netlify.app',
    githubUrl: 'https://github.com/Greenfin17/ASSIGNMENT-Bear-Watcher'
  },
  {
    id: 4,
    title: 'Sorting Hat',
    screenshot: sortingPhoto,
    altText: 'Screen shot of Sorting Hat project',
    description: 'Mimics the Sorting Hat fo the Harry Potter series',
    technologiesUsed: 'HTML, CSS, Javascript, Github for version control',
    available: true,
    url: 'https://jm-hogwarts-sorting-hat.netlify.app',
    githubUrl: 'https://github.com/Greenfin17/sorting-hat',
  },
  {
    id: 5,
    title: 'Pet Adoption',
    screenshot: petPhoto,
    altText: 'Screen shot of Pet Adoption project',
    description: 'Mimics a pet adoption site.',
    technologiesUsed: 'HTML, CSS, Javascript, Github for version control',
    available: true,
    url: 'https://jm-pet-adoption.netlify.app/',
    githubUrl: 'https://github.com/Greenfin17/pet-adoption',
  },
  {
    id: 6,
    title: 'Ski Shop',
    screenshot: skiPhoto,
    altText: 'Screen shot of Ski Shop product cards',
    description: 'Product display of imaginary ski shop',
    technologiesUsed: 'HTML, CSS, Javascript, Github for version control',
    available: true,
    url: 'https://jm-product-cards.netlify.app',
    githubUrl: 'https://github.com/Greenfin17/product-cards',
  },
];

export default projects;
