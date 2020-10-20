import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <a className="navbar-brand" href="#">
        <img style={{ width: '150px', height: '47px' }} src={logo} alt="" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active mr-3">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Donation</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Events</a>
          </li>
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Blog</a>
          </li>
        </ul>
        <Link to="/register">
          <button
            style={{ width: '134px', height: '45px', backgroundColor: '#111430', color: '#FFFFFF' }}
            className="btn btn-primary my-2 my-sm-0 mr-2"
            type="submit">
            Register
          </button>
        </Link>
        <Link to="/dashboard">
          <button
            style={{ width: '134px', height: '45px', backgroundColor: '#111430', color: '#FFFFFF' }}
            className="btn btn-primary my-2 my-sm-0"
            type="submit">
            Admin
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;