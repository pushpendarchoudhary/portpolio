import React, {useEffect, useRef} from "react";
import "./timeline.css";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaCode } from "react-icons/fa";
import { SiTcs } from "react-icons/si";
import { RiGraduationCapFill } from "react-icons/ri";
const Timeline =()=>{
    const containerRef = useRef([]);

    useEffect(()=> {
        const observer = new IntersectionObserver(
            (entries)=> {
                entries.forEach((entry)=> {
                    if(entry.isIntersecting){
                        entry.target.classList.add("animate");
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        containerRef.current.forEach((container)=>{
            if(container) observer.observe(container);
        });
        return ()=> {
            if(containerRef.current){
                containerRef.current.forEach((container)=> {
                    if(container) observer.unobserve(container);
                });
            }
        };
    }, []);

    const timelineData = [
        {
            logo: <SiTcs className="timeline-icon"/>,
            heading: "Tata Consultancy Services Ltd",
            date: "Sep-2024 - Present",
            content: "Assistant System Engineer Trainee",
            className: "left-container",
          },
          {
            logo: <FaCode className="timeline-icon"/>, // no logo
            heading: "Cetpa InfoTech Pvt. Ltd, Noida",
            date: "Jul-2023 - Aug-2023",
            content: "Web Developer Intern",
            className: "right-container",
          },
          {
            logo: <RiGraduationCapFill className="timeline-icon"/>,
            heading: "IMS Engineering College, Ghaziabad",
            date: "Nov-2020 - June 2024",
            content: "BTech Computer Science and Engineering",
            className: "left-container",
          },
          {
            logo: <LiaSchoolSolid className="timeline-icon" />,
            heading: "Hilton Convent School, Amroha",
            date: "2020",
            content: "Intermediate, CBSE",
            className: "right-container",
          },
          {
            logo: <LiaSchoolSolid className="timeline-icon" />,
            heading: "Hilton Convent School, Amroha",
            date: "2018",
            content: "High School, CBSE",
            className: "left-container",
          },
    ];
    return(
        <div className="timeline">
      {timelineData.map((item, index) => (
        <div
          key={index}
          className={`container ${item.className}`}
          ref={(el) => (containerRef.current[index] = el)}
        >
          {typeof item.logo === "string" && item.logo !== "" ? (
            <img src={item.logo} className="tcs-logo" alt="logo" />
          ) : (
            item.logo
          )}
          <div className="textbox">
            <h2>{item.heading}</h2>
            <small>{item.date}</small>
            <p>{item.content}</p>
            <span
              className={
                item.className === "left-container"
                  ? "left-container-arrow"
                  : "right-container-arrow"
              }
            ></span>
          </div>
        </div>
      ))}
    </div>
    )
}

export default Timeline;