import React from 'react';
import "./project.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import porjectimg from "../../img/full image.jpg";

function Projects (){
    return (
        <div>
            <div className="Project-div">
            <div><h1>Projects</h1></div>
            <div className='project-main'>
            <div><button className="button-container"><FontAwesomeIcon icon= {faArrowLeft}/></button></div>
            <div className="project-details">
            <div><img src={porjectimg} alt='project-img'/></div>
            <div>
            <h3>Title:<span>Mingo</span></h3>
            <h3>Description:<span>This is a block chain based project</span></h3>
            <h3>Technology:<span>Blockchain, web3.js, Reacts</span></h3>
            <h3>GitHub:<span>Blockchain, web3.js, Reacts</span></h3>
            <div className='More'><h3>Date: 12-08-2023</h3><a href=''>More</a> </div>
            </div>
            </div>
            <div><button  className="button-container"><FontAwesomeIcon icon= {faArrowRight}/></button></div>
            </div>
            
            </div>
        </div>
    );
}

export default Projects;