import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';
import mixpanel from 'mixpanel-browser';
const initMixpanel = async () => {
  await mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);
}
initMixpanel();

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <Portfolio mixpanel={mixpanel}/>
  },
  {
    path: '/resume',
    element: <Resume />
  }
];