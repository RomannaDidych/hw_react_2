import React, { Component } from "react";
import "./styles.css";
import male from "./icons/mars.png";
import female from "./icons/femenine.png";
import unknown from "./icons/question-mark.png";

function Contact(props) {
  let path = "";
  if (props.gender === "male") {
    path = male;
  } else {
    if (props.gender === "female") {
      path = female;
    } else {
      path = unknown;
    }
  }
  return (
    <div className="contact">
      <img className="contact__gender" src={path} alt={props.gender} />
      <div className="contact__data">
        <p className="contact__fullName">
          {props.firstName} {props.lastName}
        </p>
        <p className="contact__phone">{props.phone}</p>
      </div>
    </div>
  );
}
export default Contact;