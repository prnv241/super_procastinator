import React from 'react';
import { NavLink } from 'react-router-dom';

function AppSidebar(props) {
  return(
    <div className="sidebar">
      <h3><strong>Super Procastinator</strong></h3>
      <div className="sidebar-item list-group-item list-group-item-action">
        <NavLink className="nav-link" to="/todo" activeClassName="activenav">Todo's</NavLink>
      </div>
      <div className="sidebar-item list-group-item list-group-item-action">
        <NavLink className="nav-link" to="/newz" activeClassName="activenav">News</NavLink>
      </div>
      <div className="sidebar-item list-group-item list-group-item-action">
        <NavLink className="nav-link" to="/gits" activeClassName="activenav">Github Trending</NavLink>
      </div>
      <div className="sidebar-item list-group-item list-group-item-action">
        <NavLink className="nav-link" to="/reddits" activeClassName="activenav">Reddit</NavLink>
      </div>            
    </div>
  );
}

export default AppSidebar;