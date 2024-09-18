import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Home() {
    return (
        <div>
            <div className="search-bar-container">
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
                <input type="text" className="search-input" placeholder="Where to ?" />
            </div>
            <div className='para'>
                <h3 className='heading'>Travel made easy</h3>
                <div className='imageBox'>
                    <div className='imageContainer'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsn7CegfaRLfVY519bWUXwmd3AGBl-aftAg&s' alt='' className='myImage' />
                        <p className="imageHeading">Try 2 wheels &rarr;</p>
                        <p className='imageSide'>Discover new places affordably</p>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk_qkUQZEgtjLYwxHPAO5Lihpb4gTQpRgk2Q&s' alt='' className='myImage' />
                        <p className="imageHeading">For XL groups &rarr;</p>
                        <p className='imageSide'>Fit your crew & luggage, easily</p>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL2rUDv4Po6Jnp1RUawrxDjCGf8COLAa1VAQ&s' alt='' className='myImage' />
                        <p className="imageHeading">Travel in luxury &rarr;</p>
                        <p className='imageSide'>Elevated services, high-end cars</p>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGCRKqpAm1JsV2yHBezDhMX9F4UurKzPt7yQ&s' alt='' className='myImage' />
                        <p className="imageHeading">Reserve a drop off &rarr;</p>
                        <p className='imageSide'>Get to the airport stress-free</p>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://images.prismic.io/jewishfoodsociety/55ac9a2b-3cd0-4734-9466-fdec6f2ef2ce_Mike%2BSolomonov%27s%2BCoffee%2BBrisket_0161.jpeg?auto=compress,format&rect=11,0,727,500&w=1600&h=1100' alt='' className='myImage' />
                        <p className="imageHeading">Try local spots &rarr;</p>
                        <p className='imageSide'>Delievered on Uber Eats</p>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ9OUknbn_tG44l0QNPdb00MO81sFhjA4aRA&s' alt='' className='myImage' />
                        <p className="imageHeading">Book a rental car &rarr;</p>
                        <p className='imageSide'>Check out a new city with ease</p>
                    </div>
                </div>
            </div>
            <div className='para'>
                <h3 className='heading'>More ways to use Uber</h3>
                <div className='imageBox'>
                    <div className='imageContainer'>
                        <img src='https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?cs=srgb&dl=pexels-pixabay-164634.jpg&fm=jpg' alt='' className='myImage' />
                        <p className="imageHeading">Go in luxury &rarr;</p>
                        <p className='imageSide'>Elevated service, high-end cars</p>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://media.istockphoto.com/id/1289221226/photo/electric-car-and-insurance-concept.jpg?s=612x612&w=0&k=20&c=-KPMQ-wGPlkidzAaUpYrn-YLVaz1ouLRXDH9m8bChTU=' alt='' className='myImage' />
                        <p className="imageHeading">Go green &rarr;</p>
                        <p className='imageSide'>Ride in an EV or hybrid</p>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://s3.envato.com/files/403294067/DSC02418.jpeg' alt='' className='myImage' />
                        <p className="imageHeading">Choose comfort &rarr;</p>
                        <p className='imageSide'>Top-rated drivers, newer cars</p>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCawVV224713Lc7gUpSrxIF7s5GclsDSrwA&s' alt='' className='myImage' />
                        <p className="imageHeading">Teen accounts &rarr;</p>
                        <p className='imageSide'>Top-rated drivers, safety tools</p>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/12/packages.jpeg-e1670232686382.jpg' alt='' className='myImage' />
                        <p className="imageHeading">Send a package &rarr;</p>
                        <p className='imageSide'>On-demand delivery across town</p>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://www.food-safety.com/ext/resources/2021/01/map.jpeg?1615345073' alt='' className='myImage' />
                        <p className="imageHeading">Safety Toolkit &rarr;</p>
                        <p className='imageSide'>On-trip help with safety issues</p>
                    </div>
                </div>
            </div>
            <div className='para'>
                <h3 className='heading'>Go anywhere, together</h3>
                <div className='imageBox'>
                    <div className='imageContainer'>
                        <img src='https://www.vmcdn.ca/f/files/gazetteleader/images/family-road-trip-0193-adobe-stock.jpeg' alt='' className='myImage' />
                        <p className="imageHeading">Request UberXL &rarr;</p>
                        <p className='imageSide'>Fit your group & luggage, easily</p>
                    </div>
                    <div className='imageContainer'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm9nyWHKmCd3gP1xu1T2MAMHoWITs892nP_A&s' alt='' className='myImage' />
                        <p className="imageHeading">Book a rental &rarr;</p>
                        <p className='imageSide'>Rent a car, road-trip together</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;