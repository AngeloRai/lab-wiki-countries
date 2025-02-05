import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-primary mb-3">
      <div class="container">
        <Link className="navbar-brand" to="/">
          WikiCounties
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
