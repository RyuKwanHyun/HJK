import React, { useState } from 'react';
import Navbar from './components/header/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import './App.css';
import Home from './components/header/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SellShirts from './components/header/SellShirts';
import MyAccount from './components/header/MyAccount';
import AccountInformation from './components/header/AccountInformation';
import AccountDashboard from './components/header/AccountDashboard';
import Overview from './components/sidebar/Overview';
import { Reports } from './components/sidebar/Reports';
import Team from './components/sidebar/Team';
import Item from './components/sidebar/Item';
import Item2 from './components/sidebar/Item2';
import Item3 from './components/sidebar/Item3';
import Item4 from './components/sidebar/Item4';
import Item5 from './components/sidebar/Item5';
import Item6 from './components/sidebar/Item6';
import Item7 from './components/sidebar/Item7';
import Item8 from './components/sidebar/Item8';
import Item9 from './components/sidebar/Item9';
import Item10 from './components/sidebar/Item10';
import ContactUs from './components/header/ContactUs';
import Footer1 from './components/footer123/Footer1';
import Login from './components/header/Login';
import Register from './components/header/Register';
import Cart from './components/sidebar/Cart';
import AboutUs from './components/footer123/AboutUs';
import Announcement from './components/footer123/Announcement';
import CodeView from './components/footer123/CodeView';
import Comment from './components/footer123/Comment';
import ItemTitle from './components/sidebar/ItemTitle';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/myaccount' component={MyAccount} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/sellShirts' component={SellShirts} />
        <Route path='/accountinformation' component={AccountInformation} />
        <Route path='/accountdashboard' component={AccountDashboard} />
        <Route path='/overview'  component={Overview} />
        <Route path='/reports'  component={Reports} />
        <Route path='/team'  component={Team} />
        <Route path='/itemtitle'  component={ItemTitle} />
        <Route path='/item2'  component={Item2} />
        <Route path='/item3'  component={Item3} />
        <Route path='/item4'  component={Item4} />
        <Route path='/item5'  component={Item5} />
        <Route path='/item6'  component={Item6} />
        <Route path='/item7'  component={Item7} />
        <Route path='/item8'  component={Item8} />
        <Route path='/item9'  component={Item9} />
        <Route path='/item10'  component={Item10} />
        <Route path='/cart'  component={Cart} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/aboutus'  component={AboutUs} />
        <Route path='/announcement'  component={Announcement} />
        <Route path='/codeview'  component={CodeView} />
        <Route path='/comment'  component={Comment} />
        

      </Switch>
      <Footer1 />
    </Router>
  );
}

export default App;
