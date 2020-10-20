import React from 'react';

const HeaderMain = () => {
  return (
    <div className="container mb-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-center mt-4 mb-3">I grow by helping people in need.</h1>
      <div class="input-group input-group-lg w-75">
        <input type="text" class="form-control" aria-label="Sizing example input" placeholder="search..." aria-describedby="inputGroup-sizing-lg" />
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-lg">Search</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;