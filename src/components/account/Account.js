import React from 'react';
import './Account.css';
import { useNavigate } from 'react-router-dom';
import PercentageCircleIcon from './PercentageCircleIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUsers, faStar, faWallet, faQuestionCircle, faFileInvoice, faLeaf, faCog, faEnvelope, faGift, faTicketAlt, faCar, faBuilding, faHeart, faExclamationTriangle, faTrophy, faTag } from '@fortawesome/free-solid-svg-icons';

function Account() {

  const navigate = useNavigate();

  const handleWalletClick = () => {
    navigate("/wallet");
  }

  return (
    <div className='all'>
      <div className='profileBox'>
        <div>
          <h1>Raghul Selvakumar</h1>
          <div className='starBox'>
            <p><FontAwesomeIcon icon={faStar} size="1x" color="#FFD700" />5.00</p>
          </div>
        </div>
        <div className='photoBox'>
          <FontAwesomeIcon icon={faUser} size="3x" />
        </div>
      </div>
      <br />
      <br />
      <div className='walletBox' onClick={handleWalletClick}>
        <div className='account1Box'>
          <FontAwesomeIcon icon={faQuestionCircle} size="2x" />
          <p>Help</p>
        </div>
        <div className='account1Box'>
          <FontAwesomeIcon icon={faWallet} size="2x" />
          <p>Wallet</p>
        </div>
        <div className='account1Box'>
          <FontAwesomeIcon icon={faFileInvoice} size="2x" />
          <p>Activity</p>
        </div>
      </div>
      <br />
      <br />
      <div className='safetyCheckBox'>
        <div>
          <h4>safety checkup</h4>
          <p>Boost your safety profile by turning on additional features</p>
        </div>
        <div>
          <PercentageCircleIcon percentage={95} />
        </div>
      </div>
      <br />
      <div className='safetyCheckBox'>
        <div>
          <h4>Privacy checkup</h4>
          <p>Take an interactive tour of your privacy settings</p>
        </div>
        <div>
          <img src='https://media.istockphoto.com/id/856484166/photo/annual-checkup-concept-stethoscope-on-the-calendar-with-soft-focus-and-over-light-in-the.jpg?s=612x612&w=0&k=20&c=lVfCT3Hjr-ssWboIFh6lxtVGMTdMxcIlnggQRGxBjc8=' height='100' width='100' alt='' />
        </div>
      </div>
      <br />
      <div className='safetyCheckBox'>
        <div>
          <h4>Estimated CO2 saved</h4>
        </div>
        <div>
          <p> <FontAwesomeIcon icon={faLeaf} size="2x" color="green" /> 0g</p>
        </div>
      </div>
      <br />
      <br />
      <hr/>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faUsers} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Family and teens</h4>
          <p>Teen and adult accounts</p>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faCog} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Settings</h4>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faEnvelope} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Messages</h4>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faGift} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Send a gift</h4>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faUsers} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Uber One</h4>
          <p>Earn 6% Uber Cash on rides</p>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faCar} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Earn by driving or delievering</h4>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faBuilding} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Setup your business profile</h4>
          <p>Automate work travel & meal expenses</p>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faTicketAlt} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Vouchers for events</h4>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faTrophy} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Partner Rewards</h4>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faTag} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Uber Eats promotions</h4>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faHeart} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Uber Eats favorites</h4>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faUser} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Manage Uber account</h4>
        </div>
      </div>
      <div className='account2Box'>
        <div>
        <FontAwesomeIcon icon={faExclamationTriangle} size="1x" color="white" className='userIcon'/>
        </div>
        <div>
          <h4>Legal</h4>
        </div>
      </div>
    </div>
  );
};

export default Account;
