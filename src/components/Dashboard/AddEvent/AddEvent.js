import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './AddEvent.css';
const AddEvent = () => {
  return (
    <div>
      <Header></Header>
      <div className="row" style={{ background: '#F4F7FC' }}>
        <Sidebar></Sidebar>
        <div className="col-md-9">
          <form>
            <div className="add-form-container">
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Event Title</label>
                  <input type="text" class="form-control" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Event Date</label>
                  <input type="date" class="form-control" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="exampleFormControlTextarea1">Example textarea</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Banner</label>
                  <input type="file" class="form-control-file" />
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