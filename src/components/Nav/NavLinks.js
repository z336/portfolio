import * as React from 'react';
import { Link } from 'gatsby';

export default function NavLinks() {
  return (
    <>
      <Link to="/" activeClassName="active">
        Home
      </Link>
      <Link to="/about" activeClassName="active">
        About
      </Link>
      <Link to="/projects" activeClassName="active">
        Projects
      </Link>
      <Link to="/blog" activeClassName="active">
        Blog
      </Link>
    </>
  );
}
