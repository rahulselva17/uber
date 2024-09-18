import React from 'react';
import './Activity.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';


function Activity() {
  return (
    <div className='all'>
      <h1>Activity</h1>
      <div>
          <h3>Upcoming</h3>
          <div className='infoBox'>
            <div>
            <h2 className='infoHeading'>You have no upcoming trips</h2>
            <p className="infoSide">Try 2 wheels &rarr;</p>
            </div>
            <div>
            <FontAwesomeIcon icon={faCalendar} size="3x"/>
            </div>
          </div>
      </div>
      <div>
          <h3>Past</h3>
          <p>You don't have any recent activity</p>
      </div>
    </div>
  );
};

export default Activity;
