import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img
          src={`${PUBLIC_URL}/images/PIVOT-square-logo.jpg`}
          alt="PIVOT logo"
          className="sidebar-logo"
        />
      </Link>
      <header>
        <h2>PIVOT @ VT</h2>
        <p>
          <a href="mailto:contact@pivot.edu">contact@pivot.edu</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About us</h2>
      <p>
        We are PIVOT (Physics Infused Vision for Onward Thinking), a student-led org at Virginia
        Tech. Our members come from 9+ majors and collaborate on innovative, physics-driven
        solutions to real-world challenges.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/about" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
