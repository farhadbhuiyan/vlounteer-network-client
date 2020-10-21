import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './AddEvent.css';
const AddEvent = () => {

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
    formData.append('file', file);
    formData.append('title', info.title);
    formData.append('date', info.date);
    formData.append('description', info.description);

    fetch('http://localhost:5000/addEvent', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        history.replace('/dashboard');
        alert("Service Added succesfully..!! Go to home to see service")
      });
    e.preventDefault();
  }

  return (
    <div>
      <Header></Header>
      <div className="row" style={{ background: '#F4F7FC' }}>
        <Sidebar></Sidebar>
        <div className="col-md-9">
          <form onSubmit={handleSubmit}>
            <div className="add-form-container">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Event Title</label>
                  <input onBlur={handleBlur} name="title" type="text" class="form-control" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Event Date</label>
                  <input onBlur={handleBlur} name="date" type="date" class="form-control" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="exampleFormControlTextarea1">Description</label>
                  <textarea onBlur={handleBlur} name="description" class="form-control"  rows="3"></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Banner</label>
                  <input onChange={handleFileChange} type="file" class="form-control-file" />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mr-5 d-block ml-auto">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;