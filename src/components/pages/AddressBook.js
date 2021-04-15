import React from 'react';

const AddressBook = () => {
    return (    
        <div className='AddressBook'>
            <div><h1>Address Book</h1></div>
            <div><h3>DEFAULT ADDRESSES (기본주소)</h3></div>
            <div><h5>DEFAULT BILLING ADDRESS (기본 청구 주소)</h5></div>

            <div className='BillingAddress'>
            <input type='text'></input>
            <div><h5><button id = "" type = "submit">Change Billing Address</button></h5></div>
            <div><h5>DEFAULT SHIPPING ADDRESS (기본 배송 주소)</h5></div>
            </div>

            <div className='BillingAddress'>
            <input type='text'></input>
            <div><h5><button id = "" type = "submit">Change Shipping Address</button></h5></div>
            </div>
        </div>
        
        );
}

export default AddressBook;