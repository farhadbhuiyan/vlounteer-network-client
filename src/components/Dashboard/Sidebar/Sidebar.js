import React from 'react';
import './Sidebar.css';
import users from '../../../images/logos/users.png';
import add from '../../../images/logos/add.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="col-md-3">
      <div className="side-bar-container">
        <ul>
          <li>
            <img src={users} alt="" />
            <a href="#">Volunteer register list</a>
          </li>
          <li>
            <img src={add} alt="" />
            <Link to='/add-event'>
              <a href="#">Add event</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;