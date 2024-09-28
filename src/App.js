import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Account from './components/account/Account';
import Activity from './components/activity/Activity';
import Navbar from './components/Navbar';
import Eats from './components/eats/Eats';
import Wallet from './components/account/wallet/Wallet';
import UberAccount from './components/account/uber account/UberAccount';

function App() {
  return (
    <Router>
      <div className='backGround'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/account" element={<Account />} />
          <Route path="/eats" element={<Eats/>} />
          <Route path="/wallet" element={<Wallet/>} />
          <Route path='/uberaccount' element={<UberAccount/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
