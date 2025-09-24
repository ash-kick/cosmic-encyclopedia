import { NavLink, Outlet } from "react-router-dom";

export default function NavBarLayout() {
     return (
          <div className="root-layout">
               <header>
                    <nav>
                         <NavLink
                              className="nav-link"
                              to="/">
                              Home
                         </NavLink>
                         <NavLink
                              className="nav-link"
                              to="/mars">
                              Mars
                         </NavLink>
                         <NavLink
                              className="nav-link"
                              to="/venus">
                              Venus
                         </NavLink>
                         <NavLink
                              className="nav-link"
                              to="/orion-nebula">
                              Orion Nebula
                         </NavLink>
                         <NavLink
                              className="nav-link"
                              to="/andromeda-galaxy">
                              Andromeda Galaxy
                         </NavLink>
                    </nav>
               </header>
               <main>
                    <Outlet />
               </main>
          </div>
     );
}
