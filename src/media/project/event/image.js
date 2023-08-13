import allDevice from './all-devices-black.png';
import desktop from './desktop.png';
import laptop from './laptop.png';
import tablet from './tablet.png';
import mobile from './mobile.png';

const events = {
  title: 'Event Template',
  description: `
        This project build with pure HTML CSS and JavaScript. IT is mostly focus on frontend designing also 
        it is build dynamically so if you want to organize any event you just need to edit data and you are 
        good to go. i learn many things while doing this project like core flexbox grid and complex navigation bars
      `,
  techList: [
    'CSS',
    'JavaScript',
    'GitHub',
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
      image: tablet,
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

export default events;
