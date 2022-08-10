//import React from 'react';
const { createElement, render } = wp.element;
import { footerLinks } from '../helpers/variables';

export const FooterNavigation = () => {
  return (
    <nav className="navigation footer-navigation">
      <div className="footer-navigation__col">
        <p>Support</p>
        <ul className="footer-navigation__col-list">
          {footerLinks.support.map((link) => (
            <li className="footer-navigation__col-item" key={link.text}>
              <a className="link" href={link.link}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer-navigation__col">
        <p>Company</p>
        <ul className="footer-navigation__col-list">
          {footerLinks.company.map((link) => (
            <li className="footer-navigation__col-item" key={link.text}>
              <a className="link" href={link.link}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
