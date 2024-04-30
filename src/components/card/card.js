import "./card.css";
import React from "react";
// import popular_01 from "../../images/popular-01.jpg";
import { FaDownload, FaStar } from "react-icons/fa";

const card = (props) => {
  return (
    <div className="most-popular-item">
      <div className="card-wrapper">
        <img src={props.image} alt="" />
        <div className="content">
          <h4 className="title">
            {props.title}
            <br />
            <span>{props.category}</span>
          </h4>
          <ul>
            <li>
              <span style={{ color: "yellow" }}>
                <FaStar />
              </span>{" "}
              <span> {props.rate}</span>
            </li>
            <li>
              <span style={{ color: "var(--color-primary)" }}>
                <FaDownload />
              </span>
              <span> {props.download}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default card;
