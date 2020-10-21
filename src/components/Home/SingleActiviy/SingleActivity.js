import React from 'react';
import './SingleActivity.css';

const SingleActivity = ({ event }) => {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="acitivity-card d-flex flex-column justify-content-center align-items-center">
        <div className="card-image-container">
          <img src={`data:image/png;base64,${event.image.img}`}alt="" />
        </div>
        <div className="card-title-container">
          <h4 className="mt-3 text-center">{event.title}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleActivity;