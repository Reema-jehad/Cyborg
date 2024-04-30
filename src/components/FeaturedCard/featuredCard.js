import "./featuredCard.css";
import { FaDownload, FaStar } from "react-icons/fa";

const featuredCard = (props) => {
  return (
    <div className="featured-card d-flex flex flex-column m-3">
      <img src={props.image} alt="" className="" />
      <div className="top-text d-flex justify-content-between">
        <div className="title">{props.title}</div>
        <div className="d-flex gap-1">
          <span style={{ color: "yellow" }}>
            <FaStar />
          </span>
          <span className="rate">{props.rate}</span>
        </div>
      </div>
      <div className="buttom-text d-flex justify-content-between">
        <div className="downloads text-secondary">{props.downloads}</div>
        <div className="d-flex gap-1 ">
          <span style={{ color: "var(--color-primary)" }}>
            <FaDownload />
          </span>
          <span className="number">{props.number}</span>
        </div>
      </div>
    </div>
  );
};

export default featuredCard;
