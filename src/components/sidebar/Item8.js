import React, { useState } from "react";
import "./Item8.css";

const Item = () => {
    return (
    <>
        <header>
            <div className = "A2main" >
                <div className = "text-box">
                    <h1>AMERICA</h1>
                    <p>
                        REP1ER's AMERICA<br/>
                    </p>
                </div>
            </div>
        </header>

        <div className = "row">
            <div className = "item-col">
               
                <p>
                    <img src = {process.env.PUBLIC_URL + '../sidebar/sidebarimages/img-7.jpg'} />
                </p>
                
                <br/><h3>1</h3>
                <br/><h5>1</h5>
               
            </div>
            <div className = "item-col">
                <p>
                    <img src = "/img-4.jpg"/>
                </p>
                <br/><h3>1</h3>
                <br/><h5>1</h5>
            </div>
            <div className = "item-col">
                <p>
                    <img src = "#"/>
                </p>
                <br/><h3>1</h3>
                <br/><h5>1</h5>
            </div>
        </div>
        <div className = "row">
            <div className = "item-col">
                <p>
                    <img src = "../images/mentoring.jpg"/>
                </p>
                <br/><h3>1</h3>
                <br/><h5>1</h5>
            </div>
            <div className = "item-col">
                <p>
                    <img src = "../images/club.jpg"/>
                </p>
                <br/><h3>1</h3>
                <br/><h5>1</h5>
            </div>
            <div className = "item-col">
                <p>
                    <img src = "../images/parttimejob.jpg"/>
                </p>
                <br/><h3>1</h3>
                <br/><h5>1</h5>
            </div>
        </div>
        <div className = "row">
            <div className = "item-col">
                <p>
                    <img src = "../images/mentoring.jpg"/>
                </p>
                <br/><h3>1</h3>
                <br/><h5>1</h5>
            </div>
            <div className = "item-col">
                <p>
                    <img src = "../images/club.jpg"/>
                </p>
                <br/><h3>1</h3>
                <br/><h5>1</h5>
            </div>
            <div className = "item-col">
                <p>
                    <img src = "../images/parttimejob.jpg"/>
                </p>
                <br/><h3>1</h3>
                <br/><h5>1</h5>
            </div>
        </div>
    </>
    );
};
export default Item;