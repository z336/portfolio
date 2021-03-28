import * as React from 'react';
import { Link } from 'gatsby';

export default function NavLinks({ open, setOpen }) {
  return (
    <ul>
      <li>
        <Link to="/" activeClassName="active" onClick={() => setOpen(!open)}>
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          activeClassName="active"
          onClick={() => setOpen(!open)}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/projects"
          activeClassName="active"
          onClick={() => setOpen(!open)}
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="/words"
          activeClassName="active"
          onClick={() => setOpen(!open)}
        >
          Words
        </Link>
      </li>
    </ul>
  );
}
