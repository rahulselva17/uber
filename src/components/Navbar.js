import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCogs, faUser, faFileInvoice} from '@fortawesome/free-solid-svg-icons';



function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/" exact activeClassName="active"> <FontAwesomeIcon icon={faHome} /> Home</Link></li>
                <li><Link to="/services" activeClassName="active"> <FontAwesomeIcon icon={faCogs} /> Services</Link></li>
                <li><Link to="/activity" activeClassName="active"> <FontAwesomeIcon icon={faFileInvoice} /> Activity</Link></li>
                <li><Link to="/account" activeClassName="active"> <FontAwesomeIcon icon={faUser} /> Account</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;