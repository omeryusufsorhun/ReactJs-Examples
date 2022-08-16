import React from "react";
import { NavLink, Outlet } from "react-router-dom";
function Layout() {
  return (
    <div>
      <Outlet />

      <nav>
        <ul>
          <li>
            <NavLink to={"home"}>home</NavLink>
          </li>
          <li>
            <NavLink to={"about"}>about</NavLink>
          </li>
          <li>
            <NavLink to={"blog"}>blog</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Layout;
