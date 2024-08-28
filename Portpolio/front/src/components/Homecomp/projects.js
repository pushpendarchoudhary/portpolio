import React from 'react';
import "./project.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';

function Projects (){
    return (
        <div>
            <div className="Project-div">
            <div><button className="button-container"><FontAwesomeIcon icon= {faArrowLeft}/></button></div>
            <div className="project-details">
            <h2>Title: Mingo</h2>
            <h2>Description: This is a block chain based project</h2>
            <h2>Technology: Blockchain, web3.js, Reacts</h2>
            <h2>GitHub: https://github.com</h2>
            <h2>Date: 12-08-2023</h2>
            <p>More</p>
            </div>
            <div><button  className="button-container"><FontAwesomeIcon icon= {faArrowRight}/></button></div>
            <div><h1>Projects</h1></div>
            </div>
        </div>
    );
}

export default Projects;