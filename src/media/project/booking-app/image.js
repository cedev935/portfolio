import allDevice from './all-devices-black.png';
import desktop from './desktop.png';
import laptop from './laptop.png';
import mobile from './mobile.png';

const bookingApp = {
  title: 'Awesome Books',
  lilDescription: `This project is build for organizing your favorite books and their authors. It is build with implementation of 
      localstorage`,
  description: `
        This project is build for organizing your favorite books and their authors. It is build with implementation of 
        localStorage, and dynamic pages i.e in single page all there pages is nested. some of projects is had been reviewed and
        approved by microverse professional coders 
      `,
  techList: [
    'CSS',
    'JavaScript',
    'localStorage',
    'HTML',
  ],
  link: [
    'https://powerlevel9000.github.io/Awesome-Books/dist/',
    'https://github.com/PowerLevel9000/Awesome-Books/',
  ],
  image: [
    {
      image: allDevice,
      styleMobile: {
        width: '80%',
        height: '40vh',
      },
      style: {
        width: '80%',
        height: '70vh',
      },
    },
    {
      image: laptop,
      styleMobile: {
        width: '80%',
        height: '40vh',
        maxWidth: '400px',
      },
      style: {
        width: '80%',
        height: '70vh',
        maxWidth: '700px',
        transform: 'rotateY(30deg)',
      },
    },
    {
      image: desktop,
      styleMobile: {
        width: '80%',
        height: '40vh',
        maxWidth: '400px',
      },
      style: {
        width: '80%',
        height: '70vh',
        maxWidth: '700px',
        transform: 'rotateY(30deg)',
      },
    },
    {
      image: mobile,
      styleMobile: {
        width: '50%',
        height: '40vh',
        maxWidth: '200px',
      },
      style: {
        width: '80%',
        height: '70vh',
        maxWidth: '350px',
      },
    },
    {
      image: mobile,
      styleMobile: {
        width: '40%',
        height: '40vh',
        maxWidth: '150px',
      },
      style: {
        width: '80%',
        height: '70vh',
        maxWidth: '200px',
      },
    },
  ],
};

export default bookingApp;
