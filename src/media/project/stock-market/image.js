import allDevice from './all-devices-black.png';
import desktop from './desktop.png';
import laptop from './laptop.png';
import tablet from './tablet.png';
import mobile from './mobile.png';

const stockMarket = {
  title: 'Stock Analysis',
  description: `
        Stock Market Analysis This is a React-Based Project, in this website you can 
        analyze your stocks and compare them to optimize your profit, it works with the 
        financial API, and apart from this you will find a responsive design and clean UI, 
        and in the future maybe we have some more features for checking bitcoin and searching company 
        stock by name and a detailed navigation bar
      `,
  techList: [
    'React',
    'Redux',
    'Styled Component',
    'HTML5',
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

export default stockMarket;
