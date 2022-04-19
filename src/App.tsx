import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import { Nav } from './components';
import Nav from "./components/Nav/Nav";
import { routes } from './config/routes';
import { v4 as uuid } from 'uuid';

function App() {
  useEffect(() => { // []
    console.log('routes:', routes);
  }, []);
  return (
    <Router>
      <Nav />
      <Routes>
        {routes.map((route) => (
          <Route
            key={uuid()}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
