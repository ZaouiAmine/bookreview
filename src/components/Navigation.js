import React from "react";
import { Route, NavLink } from "react-router-dom";

import Styles from "../styles/Navigation.module.css";
import hide from "../styles/Header.module.css";

function Navigation() {
  return (
    <nav id="navigation" className={`${Styles.nav} ${hide.hide}`}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? Styles.activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="bestseller"
            className={({ isActive }) =>
              isActive ? Styles.activeStyle : undefined
            }
          >
            Bestseller
          </NavLink>
        </li>
        <li>
          <NavLink
            to="category"
            className={({ isActive }) =>
              isActive ? Styles.activeStyle : undefined
            }
          >
            Category
          </NavLink>
        </li>
        <li>
          <NavLink
            to="community"
            className={({ isActive }) =>
              isActive ? Styles.activeStyle : undefined
            }
          >
            Community
          </NavLink>
        </li>
        <li>
          <NavLink
            to="blog"
            className={({ isActive }) =>
              isActive ? Styles.activeStyle : undefined
            }
          >
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
