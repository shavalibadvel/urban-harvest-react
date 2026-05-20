import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar({ isOpen, closeSidebar }) {
  // Menu items - we map over this so adding new items is easy
  const menuItems = [
    { path: "/", label: "Dashboard", icon: "🏠" },
    { path: "/products", label: "Products", icon: "🛒" },
  ];

  return (
    <>
      {/* Dark overlay shown only on mobile when sidebar is open */}
      {isOpen && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      <aside className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-logo">
          <span className="sidebar-logo-icon">🌿</span>
          <h2>Urban Harvest</h2>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                "sidebar-link" + (isActive ? " active" : "")
              }
              onClick={closeSidebar}
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p>© Urban Harvest</p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
