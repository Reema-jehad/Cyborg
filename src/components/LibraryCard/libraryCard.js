import "./libraryCard.css";
import { SecondaryButton } from "../../components/index";

const libraryCard = (props) => {
  return (
    <div className="gaming-library-card">
      <ul>
      <li className="gaming-library-image"><img src={props.image} alt="" /></li>
      <li><h4>{props.title}</h4><span className="text-secondary">{props.category}</span></li>
      <li><h4>Date Added</h4><span className="text-secondary">{props.date}</span></li>
      <li><h4>Hours Played</h4><span className="text-secondary">{props.hours}</span></li>
      <li><h4>Currently</h4><span className="text-secondary">{props.download}</span></li>
      <SecondaryButton text="Download"/>
      </ul>
    </div>
  )
}

export default libraryCard
