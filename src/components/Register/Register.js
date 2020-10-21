import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import './Register.css';

const Register = (props) => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();

  const [info, setInfo] = useState({
    fullName: '',
    email: '',
    date: '',
    description: '',
    title: ''
  });
  console.log(info);


  const handleChange = (event) => {
    const newInfo = { ...info };
    if (event.target.name === 'fullName') {
      newInfo.fullName = event.target.value;
    }
    else if (event.target.name === 'email') {
      newInfo.email = event.target.value;
    }
    else if (event.target.name === 'date') {
      newInfo.date = event.target.value;
    }
    else if (event.target.name === 'description') {
      newInfo.description = event.target.value;
    }
    else if (event.target.name === 'title') {
      newInfo.title = event.target.value;
    }
    setInfo(newInfo)
  }


  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('fullName', info.fullName);
    formData.append('email', info.email);
    formData.append('date', info.date);
    formData.append('description', info.description);
    formData.append('title', info.title);

    fetch('http://localhost:5000/addRegistration', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        history.replace('/registered-event');
        alert("Registration Complited succesfully..!!")
      });
    e.preventDefault();
  }
  return (
    <div className="conatiner-fluid d-flex justify-content-center align-items-center flex-column">
      <div className="logo-container">
        <img className="login-form-logo" src={logo} alt="" />
      </div>
      <div className="registration-form-container">
        <h2>Register as a Volunteer</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input onChange={handleChange} type="text" className="form-control" name="fullName" placeholder="Full Name" value={loggedInUser.name} />
          </div>
          <div className="form-group">
            <input onSubmit={handleChange} type="email" className="form-control" name="email" placeholder="Username or Email" value={loggedInUser.email} />
          </div>
          <div className="form-group">
            <input onSubmit={handleChange} type="date" className="form-control" name="date" placeholder="Date" />
          </div>
          <div className="form-group">
            <input onSubmit={handleChange} type="text" className="form-control" name="description" placeholder="Desicription" />
          </div>
          <div className="form-group">
            <input onSubmit={handleChange} type="text" className="form-control" name="title" placeholder="Organize books at the library." />
          </div>
          <button type="submit" className="btn btn-primary d-block w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;