import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faBicycle, faBowlFood, faBox, faBoxOpen, faBoxes, faCar, faComputerMouse, faDog, faFaceGrinHearts, faKey, faNoteSticky, faTablets, faUserClock, faWineBottle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Services() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/eats');
  };

  return (
    <div className='para'>
      <h1>Services</h1>
      <div>
        <h3>Go anywhere</h3>
      </div>
      <div className='services1Box'>
        <div className='rideBox'>
          <div>
            <p>Ride</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCar} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>Rental cars</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faKey} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>2-Wheels</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBicycle} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>Reserve</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserClock} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>Package</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBox} size="3x" color="white" />
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div>
        <h3>Get anything delivered</h3>
      </div>
      <div className='services1Box'>
        <div className='rideBox'>
          <div>
            <p>Food</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBowlFood} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>Grocery</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBoxes} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>Alcohol</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faWineBottle} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>Convenience</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBoxOpen} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>Health</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTablets} size="3x" color="white" />
          </div>
        </div>
      </div>
      <br />
      <div className='services1Box'>
        <div className='rideBox'>
          <div>
            <p>Personal Care</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faFaceGrinHearts} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>Baby</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBaby} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>Gourmet</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBicycle} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>Pet Supplies</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faDog} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox'>
          <div>
            <p>Flowers</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBicycle} size="3x" color="white" />
          </div>
        </div>
      </div>
      <br />
      <div className='services2Box'>
        <div className='rideBox'>
          <div>
            <p>Retail</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faNoteSticky} size="3x" color="white" />
          </div>
        </div>
        <div className='rideBox' onClick={handleClick}>
          <div>
            <p>Electronics</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faComputerMouse} size="3x" color="white" />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Services;
