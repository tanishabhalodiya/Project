import "./Sidebar.css";
import { useState } from "react";

function Sidebar() {
  const [showSidebarFilter, setShowSidebarFilter] = useState(false);

  const toggleShowSidebarFilter = () =>
    setShowSidebarFilter(!showSidebarFilter);

  return (
    <div className="sidebar-filter">
      <button type="button" class="btn btn-outline-info" onClick={toggleShowSidebarFilter}>Side bar</button>
      <div
        className={
          showSidebarFilter
            ? "sidebar-filter-data active"
            : "sidebar-filter-data"
        }
        style={{
          width: showSidebarFilter
            ? window.innerWidth > 500
              ? 300
              : window.innerWidth
            : 0
        }}
      >
        <div className="filter-data">
        <button type="button" class="btn btn-outline-secondary" onClick={toggleShowSidebarFilter}>Close</button>
          <a href="#" class="link-underline-primary">Dashboard</a>

          <a href="#" class="link-underline-primary">Setting</a>
          <p><a href="#" class="link-underline-primary">Help</a></p>
          
          {/* <span>Filter 3</span>
          <span>Filter 4</span>
          <span>Filter 5</span>
          <span>Filter 6</span>
          <span>Filter 6</span>*/}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;