import React from 'react';
import './SellShirts.css';

const AcccountDashboard = () => {
    return (    
        <div className='AcccountDashboard'>
            <div><h1>ACCOUNT DASHBOARD</h1></div>
            <div><h2>Hi, Bro!!!<p>This is where you can check your information.</p></h2></div>
            <div>RECENT ORDERS(최근 주문)</div>
            <div className='VIEW ALL'>
            <button id = "DashboardBtn" type = "submit">VIEW ALL</button>
        </div>
        <div className='RecentOders'>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
            <p><input type='text'></input></p>
        </div>
        </div>
        );
}

export default AcccountDashboard;