import React from "react";
import javalogo from "../../img/java-logo-1.png";
import csslogo from "../../img/css3-logo-vector.svg";
import javascriptlogo from "../../img/javascript-logo-vector.svg";
import mongodblogo from "../../img/mongodb-logo-vector.svg";
import mysqllogo from "../../img/mysql-logo-vector-1.svg";
import nodejslogo from "../../img/nodejs-logo-vector.svg";
import reactlogo from "../../img/react-logo-vector.svg";
import "./skills.css";

function Skills (){
    return(
        <div>
            <div className="Skills-container">
               
                <div className="logo-container">
                    <div><img src={javalogo} alt="javalogo"/><p>Java</p></div>
                    <div><img src={csslogo} alt="csslogo"/><p>CSS</p></div>
                    <div><img src={javascriptlogo} alt="javascriptlogo"/><p>JavaScript</p></div>
                    <div><img src={mongodblogo} alt="mongodblogo"/><p>MongoDb</p></div>
                    <div><img src={mysqllogo} alt="mysqllogo"/><p>mysqllogo</p></div>
                    <div><img src={nodejslogo} alt="nodejslogo"/><p>nodeJs</p></div>
                    <div> <img src={reactlogo} alt="reactlogo"/><p>reactlogo</p></div>
                </div> 
                <h1>Skills</h1>
            </div>
            
        </div>
    )
}

export default Skills;