import { Outlet } from 'react-router-dom';

import Navigation from '../navigation/navigation.component';
const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'getstarted',
     
    },
    {
      id: 2,
      title: 'shop',
      
    },
    {
      id: 3,
      title: 'usefulinformation',
     
    },
    {
      id: 4,
      title: 'about',
    
    },
    {
      id: 5,
      title: 'search',
      
    },
  ];

  return (
    <div>
      <Navigation  />
      <Outlet />
    </div>
  );
};

export default Home;