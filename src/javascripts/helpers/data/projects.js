// projects.js
import amazonPhoto from './images/AlmostAmazon.png';
import tamagotchiPhoto from './images/Tamagotchi.png';
import bearPhoto from './images/BearWatcher.png';
import sortingPhoto from './images/SortingHat.png';
import petPhoto from './images/PetAdoption.png';
import skiPhoto from './images/SkiShop.png';

const projects = [
  {
    id: 0,
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
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
