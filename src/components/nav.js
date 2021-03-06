import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'music' },
  { href: '/about', label: 'about' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export const NAV_HEIGHT = 70;

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href} as={`${process.env.ASSET_PREFIX}${href}`}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%;
        height: ${NAV_HEIGHT}px;
        background: #141414;
        border-bottom: 1px solid #000;
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
        color: #fff;
        text-decoration: none;
        font-size: 14px;
      }
    `}</style>
  </nav>
);

export default Nav;
