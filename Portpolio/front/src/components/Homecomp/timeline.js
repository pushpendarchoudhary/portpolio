import React from "react";
import "./timeline.css";
import tatalogo from "../../img/tcslogo.png";
const Timeline =()=>{
    return(
        <div>
            <div className="timeline">
                <div className="container left-container">
                    <img src={tatalogo} className="tcs-logo" alt="logo"/>
                    <div className="textbox">
                        <h2>Tata consultancy services Ltd</h2>
                        <small> Sep-2024- present</small>
                        <p>Assistant System Engineer trainee</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div className="container right-container">
                    <img alt="logo"/>
                    <div className="textbox">
                        <h2>Cetpa InfoTech Pvt. Ltd, Noida</h2>
                        <small> Jul-2023- Aug-2023</small>
                        <p>Web Developer Intern</p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>
                <div className="container left-container">
                    <img alt="logo"/>
                    <div className="textbox">
                        <h2>IMS Engineering College, Ghaziabad</h2>
                        <small> Nov-2020 - June 2024</small>
                        <p>BTech Computer Science and Engineering</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
                <div className="container right-container">
                    <img alt="logo"/>
                    <div className="textbox">
                        <h2>Hilton Convent School, Amroha</h2>
                        <small>2020</small>
                        <p>Intermediate, CBSE</p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>
                <div className="container left-container">
                    <img alt="logo"/>
                    <div className="textbox">
                        <h2>Hilton Convent School, Amroha</h2>
                        <small>2018</small>
                        <p>High School, CBSE</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline;