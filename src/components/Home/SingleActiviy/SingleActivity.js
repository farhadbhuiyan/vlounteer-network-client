import React from 'react';
import './SingleActivity.css';

const SingleActivity = ({ activity }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="acitivity-card d-flex flex-column justify-content-center align-items-center">
        <div className="card-image-container">
          <img src={activity.image} alt="" />
        </div>
        <div className="card-title-container">
          <h4 className="mt-3 text-center">{activity.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleActivity;