import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import VolunteerList from '../VolunteerList/VolunteerList';

const Dashboard = () => {
  return (
    <div style={{ background: '#F4F7FC' }}>
      <Header></Header>
      <div className="row">
        <Sidebar></Sidebar>
        <VolunteerList></VolunteerList>
      </div>
    </div>
  );
};

export default Dashboard;