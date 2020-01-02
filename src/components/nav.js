import React from 'react';

const links = [{ href: '/', label: 'Home' }].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export const NAV_HEIGHT = 70;

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        position: fixed;
        top: 0;
        width: 100%;
        height: ${NAV_HEIGHT}px;
        background: white;
        border-bottom: 1px solid #ddd;
      }
      nav > ul {
        display: flex;
        margin: 0;
        padding: 0;
      }
      ul,
      li {
        list-style-type: none;
      }
      li {
        padding: 24px 16px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

export default Nav;
