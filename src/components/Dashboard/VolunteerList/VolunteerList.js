import React from 'react';
import SingleVolunteer from '../SingleVolunteer/SingleVolunteer';
import './VlounteerList.css';

const VolunteerList = () => {
  return (
    <div className="col-md-9 mr-0">
      <div className="volunteer-list-container">
        <table class="table table-borderless">
          <thead class="table-active">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email ID</th>
              <th scope="col">Registating date</th>
              <th scope="col">Volunteer list</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <SingleVolunteer></SingleVolunteer>
        </table>
      </div>
    </div>
  );
};
export default VolunteerList;