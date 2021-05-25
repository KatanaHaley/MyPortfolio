import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Nav.css";


function Nav() {
  return (
    <BrowserRouter>
      <div id="nav">
        <header>
          <nav>
            <ul>
              <li class="pointer">
                <Link
                  activeClass="active"
                  spy={true}
                  to="home"
                  smooth={true}
                  offset={0}
                  direction={100}
                >
                  Home
                </Link>
                </li>
                <li class="pointer">
                <Link
                  activeClass="active"
                  spy={true}
                  to="about"
                  smooth={true}
                  offset={0}
                  direction={100}
                >
                  About
                </Link>
                </li>
                <li class="pointer">
                <Link
                  activeClass="active"
                  spy={true}
                  to="projects"
                  smooth={true}
                  offset={0}
                  direction={100}
                >
                  Projects
                </Link>
                </li>
                {/* <li class="pointer">
                <Link
                  activeClass="active"
                  spy={true}
                  to="products"
                  smooth={true}
                  offset={0}
                  direction={100}
                >
                  Products
                </Link>
                </li> */}
                <li class="pointer">
                <Link
                  activeClass="active"
                  spy={true}
                  to="contact"
                  smooth={true}
                  offset={0}
                  direction={30}
                >
                  Contact
                </Link>
                </li>
                </ul>
          </nav>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default Nav;
