import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Portfolio />
  },
  {
    path: '/resume',
    element: <Resume />
  }
];