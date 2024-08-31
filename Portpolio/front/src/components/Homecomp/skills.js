import React from "react";
import javalogo from "../../img/java-logo-1.png";
import csslogo from "../../img/css3-logo-vector.svg";
import javascriptlogo from "../../img/javascript-logo-vector.svg";
import mongodblogo from "../../img/mongodb-logo-vector.svg";
import mysqllogo from "../../img/mysql-logo-vector-1.svg";
import nodejslogo from "../../img/nodejs-logo-vector.svg";
import reactlogo from "../../img/react-logo-vector.svg";
import "./skills.css";

const Skills =()=>{
    return(
        <div>
            <div className="Skills-container">
                <div className="skills">
                <div className="logo-container">
                    <div><img src={javalogo} alt="javalogo"/><p>Java</p></div>
                    <div><img src={csslogo} alt="csslogo"/><p>CSS</p></div>
                    <div><img src={javascriptlogo} alt="javascriptlogo"/><p>JavaScript</p></div>
                    <div><img src={mongodblogo} alt="mongodblogo"/><p>MongoDb</p></div>
                    <div><img src={mysqllogo} alt="mysqllogo"/><p>MySql</p></div>
                    <div><img src={nodejslogo} alt="nodejslogo"/><p>NodeJs</p></div>
                    <div><img src={reactlogo} alt="reactlogo"/><p>ReactJs</p></div>
                </div> 
                <div className="additional-skills"><a href=""  >Additional Skills</a></div>
                </div>
                <h1>Skills</h1>
            </div>
        </div>
    )
}

export default Skills;