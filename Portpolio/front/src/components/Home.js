import React from 'react';
import nobgImage from '../img/nobg.png';
import Academics from './Homecomp/academic';
import Projects from './Homecomp/projects';
import "./home.css";
import Skills from './Homecomp/skills';
import Timeline from './Homecomp/timeline';

const Home =()=>{
    return (
        <div>
            <div class="introduction">
                <div>
                    <h1 class="Iam">I'm </h1>
                    <h1 class= "Name first">PUSHPENDAR</h1>
                    <h1 class= "Name surname">CHOUDHARY</h1>
                    <p class= "Software">Software Engineer</p>
                </div>
            
            <img class ="profile-image" src={nobgImage} alt='img'/>
            </div>
            <div>
                <Academics/>
                <Skills/>
                <Projects/>
                <Timeline/>

            </div>
        </div>
        
    );
}

export default Home;