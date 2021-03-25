import * as React from 'react';

export default function FooterLinks() {
  return (
    <ul>
      <li>
        <a href="mailto:jcoleman1388@gmail.com?subject=Saw Your Site">Email</a>
      </li>
      <li>
        <a
          href="https://github.com/z336"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="https://dribbble.com/z336"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/jon-coleman-837186104/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
      <li>© {new Date().getFullYear()}</li>
    </ul>
  );
}
