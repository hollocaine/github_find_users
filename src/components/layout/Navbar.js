import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const fontIcon = icon => {
  return <FontAwesomeIcon icon={icon} />;
};

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {icon}
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: fontIcon(faGithub)
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};
export default Navbar;
