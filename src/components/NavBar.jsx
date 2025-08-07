import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import doctors from '../RandomData/doctor';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BsSun, BsMoonStars } from 'react-icons/bs';

function NavBar({
  searchTerm,
  setSearchTerm,
  selectedSpecialist,
  setSelectedSpecialist,
  mode,
  toggleTheme
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location.pathname !== '/bds') {
      navigate('/bds');
    }
  };

  const showSpecialistFilter = location.pathname === '/bds';

  const bdsSpecialists = [
    ...new Set(
      doctors
        .filter((doc) => doc.department === 'BDS')
        .map((doc) => doc.specialist)
    ),
  ];

  const handleSpecialistChange = (e) => {
    setSelectedSpecialist(e.target.value);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm sticky-top`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">Doctors Hub</NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Home */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            {/* Departments Dropdown */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Departments
              </span>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/bds">BDS</NavLink></li>
                <li><NavLink className="dropdown-item" to="/mbbs">MBBS</NavLink></li>
                <li><NavLink className="dropdown-item" to="/bsn">BSN</NavLink></li>
              </ul>
            </li>

            {/* Contact Us */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>
          </ul>

          {/* BDS Specialist Filter */}
          {showSpecialistFilter && (
            <select
              className="form-select me-2"
              style={{ maxWidth: 200 }}
              onChange={handleSpecialistChange}
              value={selectedSpecialist}
            >
              <option value="All">Filter by Specialist</option>
              {bdsSpecialists.map((spec, idx) => (
                <option key={idx} value={spec}>{spec}</option>
              ))}
            </select>
          )}

          {/* Search Input */}
          <form className="d-flex me-3" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className={`btn ${mode === 'dark' ? 'btn-outline-light' : 'btn-outline-success'}`}
              type="submit"
            >
              Search
            </button>
          </form>

          {/* Dark/Light Mode Toggle */}
          <button
            className="btn btn-sm btn-outline-secondary d-flex align-items-center"
            onClick={toggleTheme}
            title="Toggle Theme"
          >
            {mode === 'dark' ? <BsSun className="me-1" /> : <BsMoonStars className="me-1" />}
            {mode === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
