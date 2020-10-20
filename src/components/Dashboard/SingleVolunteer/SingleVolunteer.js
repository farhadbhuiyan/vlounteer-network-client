import React from 'react';
import deleteIcon from '../../../images/logos/delete.png';

const SingleVolunteer = () => {
  return (
    <>
      <tbody>
        <tr>
          <td>Sufi Ahmed Hamim</td>
          <td>sufi@gmail.com</td>
          <td>22-10-2020</td>
          <td>@Organize books at the library.</td>
          <td style={{background: '#FF444A'}}>
            <img style={{ width: '21px', height: '21px'}} src={deleteIcon} alt="" />
          </td>
        </tr>
        <tr>
          <td>Sufi Ahmed Hamim</td>
          <td>sufi@gmail.com</td>
          <td>22-10-2020</td>
          <td>@Organize books at the library.</td>
          <td style={{background: '#FF444A'}}>
            <img style={{ width: '21px', height: '21px'}} src={deleteIcon} alt="" />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default SingleVolunteer;