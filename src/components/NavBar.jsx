import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css"

import ReorderIcon from '@mui/icons-material/Reorder'

const NavBar = () => {

  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  // Everytime a page is changed, close the navbar
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
        <div className="toggleButton">
            <button onClick={() => { setExpandNavbar((prev) => !prev) }}>
              <ReorderIcon />
            </button>
        </div>

        <div className="links">
            <Link to="/">About</Link>
            <Link to="/project">Project</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default NavBar