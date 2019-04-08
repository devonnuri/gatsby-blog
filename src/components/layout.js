import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  let headerStyle = {
    fontFamily: `Major Mono Display, monospace`,
    marginTop: 0
  };

  if (location.pathname === rootPath) {
    headerStyle = { ...headerStyle, marginBottom: rhythm(1.5), ...scale(1.5) };
  }

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
      <header>
        <h1 style={headerStyle}>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`
            }}
            to="/"
          >
            {title.toLowerCase()}
          </Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>{`© ${new Date().getFullYear()}`}</footer>
    </div>
  );
};

export default Layout;
