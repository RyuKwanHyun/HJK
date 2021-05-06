import React from 'react';
import Navbar from './components/header/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import Home from './components/header/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sign_up from './components/header/loginform';
import SellShirts from './components/header/SellShirts';
import MyAccount from './components/header/MyAccount';
import AccountInformation from './components/header/AccountInformation';
import AccountDashboard from './components/header/AccountDashboard';
import Overview from './components/sidebar/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './components/sidebar/Reports';
import Team from './components/sidebar/Team';
import Item from './components/sidebar/Item';
import ContactUs from './components/header/ContactUs';
import Footer1 from './components/footer123/Footer1';

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/myaccount' component={MyAccount} />
        <Route path='/sign_up' component={Sign_up} />
        <Route path='/sign_up' component={Sign_up} />
        <Route path='/sellShirts' component={SellShirts} />
        <Route path='/accountinformation' component={AccountInformation} />
        <Route path='/accountdashboard' component={AccountDashboard} />
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
        <Route path='/item' exact component={Item} />
      </Switch>
      <Footer1 />
    </Router>
  );
}

export default App;
