import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { routes } from './config/routes';
import mixpanel from 'mixpanel-browser';
// import { MixpanelConsumer } from 'react-mixpanel';
import './style.css';

const initMixpanel = async (): Promise<void> => {
  await mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN || '');
};
initMixpanel();

function App(): React.ReactNode {
  return (
    <Router>
      <Navigation mixpanel={mixpanel} />
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
