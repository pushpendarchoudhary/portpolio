import React from 'react';
import nobgImage from '../img/nobg.png';
import Academics from './Homecomp/academic';

function Home (){
    return (
        <div>
            <div>
            <h1><span>I'm </span>PUSHPENDAR CHOUDHARY</h1>
            <p>Software Engineer</p>
            <img src={nobgImage} alt='img'/>
            </div>
            <div>
                <Academics/>
            </div>
        </div>
        
    );
}

export default Home;