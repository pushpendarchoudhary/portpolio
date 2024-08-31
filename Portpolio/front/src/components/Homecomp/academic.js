import React from 'react';
import "./academic.css";

const Academics = ()=>{
    return (
        <div>
            <div className="Academic-div">
            <h1 className="academic">Academics</h1>
            <div className='marks-div'>
            <div>
            <h1 className= "percentage">80.4<span>%</span> </h1>
            <h2>BTech CSE </h2>
            <h2>IMS Engineering College</h2>
            <h2> Ghaziabad, India</h2>
            </div>
            
            <div>
            <h1 className= "percentage">96.4<span>%</span> </h1>
            <h2>12th CBSE </h2>
            <h2>Hilton Convent School</h2>
            <h2> Amroha, India</h2>
            </div>
            
            <div>
            <h1 className= "percentage">96.6<span>%</span> </h1>
            <h2>10th CBSE </h2>
            <h2>Hilton Convent School</h2>
            <h2> Amroha, India</h2>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Academics;