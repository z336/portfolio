import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            // wrapped as IIFE to use private variables and functions
            (function () {
              function setTheme(newTheme) {
                document.body.className = newTheme; // "dark" or "light"
                window.__theme = newTheme;
                window.__onThemeChange(newTheme);
              }
              // this will be overwritten in our React component
              window.__onThemeChange = function () {};
              // this will be triggered by our React component
              window.__setPreferredTheme = function (newTheme) {
                setTheme(newTheme);
                try {
                  localStorage.setItem("theme", JSON.stringify(window.__theme));
                } catch (err) {}
              };
              // detect system theme and monitor for changes
              const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
              darkQuery.addListener(function (event) {
                window.__setPreferredTheme(event.matches ? "dark" : "light");
              });
              let preferredTheme;
              // try to get saved theme
              try {
                preferredTheme = JSON.parse(localStorage.getItem("theme"));
              } catch (err) {}  
              // initialize preferredTheme
              setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
            })();
            `,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
