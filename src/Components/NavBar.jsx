import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Star Wars Explorer</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/characters">Characters</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/starships">Starships</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/planets">Planets</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/films">Films</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
