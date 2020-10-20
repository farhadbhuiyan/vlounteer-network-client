import React, { useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png';
import './Register.css';

const Register = (props) => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();

  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);

  const handleBlur = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  }

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  }

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append('fullName', info.fullName);
    formData.append('email', info.email);
    formData.append('date', info.date);
    formData.append('description', info.description);
    formData.append('title', info.title);

    fetch('http://localhost:5000/register', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        history.replace('/dashboard');
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
        <form>
          <div class="form-group">
            <input type="text" class="form-control" name="fullName" placeholder="Full Name" value={loggedInUser.name} />
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" placeholder="Username or Email" value={loggedInUser.email} />
          </div>
          <div class="form-group">
            <input type="date" class="form-control" name="date" placeholder="Date" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="description" placeholder="Desicription" />
          </div>
          <div class="form-group">
            <input type="text" class="form-control" name="title" placeholder="Organize books at the library." />
          </div>
          <button onClick={handleSubmit} type="submit" class="btn btn-primary d-block w-100">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;