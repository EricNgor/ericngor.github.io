import { OverridedMixpanel } from 'mixpanel-browser';
import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

type NavItem = {
  name: string;
  location: string
}

const navItems: NavItem[] = [
  {
    name: 'Home',
    location: '/'
  },
  {
    name: 'Projects',
    location: '/projects'
  },
  {
    name: 'Resume',
    location: '/resume'
  }
]

const Navigation: React.FC<{mixpanel: OverridedMixpanel}> = ({mixpanel}) => {
  return (
    <nav className="nav-component">
      <ul className="nav-menu">
        {navItems.map((navItem) => (
          <li className="nav-item" key={navItem.name}>
            <Link
              to={navItem.location}
              onClick={() => mixpanel.track('Clicked nav item', { _name: navItem.name })}
            >
              {navItem.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;