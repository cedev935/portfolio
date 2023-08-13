import allDevice from './all-devices-black.png';
import desktop from './desktop.png';
import laptop from './laptop.png';
import tablet from './tablet.png';
import mobile from './mobile.png';

const bookingApp = {
  title: 'Car Rental',
  description: `
        Car Rental is integration of two app i.e. Frontend and Backend built on React and Ruby On Rails while Collaboration
        with other developers.In this app User can create account log in with authorization see, reserve or cancel car according to 
        the city alloted, also there are features only for admin like add cars and delete cars  
      `,
  techList: [
    'CSS',
    'React',
    'Ruby On Rails',
    'PostgreSQL',
    'HTML5',
  ],
  link: [
    'https://booking-app-frontend-0qon.onrender.com/',
    'https://github.com/ernestmusong/Booking-app-frontend',
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

export default bookingApp;
