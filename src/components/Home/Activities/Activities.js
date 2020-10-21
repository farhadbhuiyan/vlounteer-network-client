import React, { useEffect, useState } from 'react';
import SingleActivity from '../SingleActiviy/SingleActivity';
import childSupport from '../../../images/childSupport.png';
import foodCharity from '../../../images/foodCharity.png';
import { Link } from 'react-router-dom';

const Activities = () => {
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/events')
      .then(res => res.json())
      .then(data => setEventData(data));
  }, [])

  return (
    <div className="container">
      <Link to="/register">
        <div className="row d-flex justify-content-between card-container mr-0">
          {
            eventData.map(event => <SingleActivity key={event._id} event={event}></SingleActivity>)
          }
        </div>
      </Link>
    </div>
  );
};

export default Activities;