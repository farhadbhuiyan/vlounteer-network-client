import React, { useEffect, useState } from 'react';
import SingleActivity from '../SingleActiviy/SingleActivity';
import childSupport from '../../../images/childSupport.png';
import foodCharity from '../../../images/foodCharity.png';
import { Link } from 'react-router-dom';

const Activities = () => {
  // const [serviceData, setServiceData] = useState([]);

  // useEffect(() => {
  //   fetch('https://agile-escarpment-89620.herokuapp.com/services')
  //     .then(res => res.json())
  //     .then(data => setServiceData(data));
  // }, [])

  const activityData = [
    {
      id: 1,
      title: 'Child Support',
      image: childSupport,
      color: ' #FFBD3E'
    },
    {
      id: 2,
      title: 'Child Support',
      image: childSupport,
      color: ' #FFBD3E'
    },
    {
      id: 3,
      title: 'Child Support',
      image: childSupport,
      color: ' #FFBD3E'
    },
    {
      id: 4,
      title: 'Food Charity',
      image: foodCharity,
      color: ' #FFBD3E'
    },
    {
      id: 5,
      title: 'Child Support',
      image: childSupport,
      color: ' #FFBD3E'
    },
    {
      id: 6,
      title: 'Child Support',
      image: childSupport,
      color: ' #FFBD3E'
    },
    {
      id: 7,
      title: 'Child Support',
      image: childSupport,
      color: ' #FFBD3E'
    },
    {
      id: 8,
      title: 'Child Support',
      image: childSupport,
      color: ' #FFBD3E'
    }
  ]

  return (
    <div className="container">
      <div className="row d-flex justify-content-between card-container mr-0">
        {
          activityData.map(activity => <Link to={`/register/${activity.id}`}><SingleActivity key={activity.id} activity={activity}></SingleActivity></Link>)
        }
      </div>
    </div>
  );
};

export default Activities;