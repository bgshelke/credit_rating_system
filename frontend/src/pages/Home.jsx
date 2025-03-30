import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
   <>
    {/* --------------------Navbar code---------------------------  */}
    
    <nav className="navbar navbar-expand-lg bg-primary-subtle">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#"><b>Credit Rating</b></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/add">Add Mortgage</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/show">Show Mortgages</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link disabled" aria-disabled="true">Disabled</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
{/* --------------------------------Navbar Code ends------------------- */}
      
   </>
  )
}

export default Home
