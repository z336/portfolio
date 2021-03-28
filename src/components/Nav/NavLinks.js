import * as React from 'react';
import { Link } from 'gatsby';

export default function NavLinks() {
  return (
    <ul>
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" activeClassName="active">
          About
        </Link>
      </li>
      <li>
        <Link to="/projects" activeClassName="active">
          Projects
        </Link>
      </li>
      <li>
        <Link to="/words" activeClassName="active">
          Words
        </Link>
      </li>
    </ul>
  );
}
