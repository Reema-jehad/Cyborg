import "./hero.css";
import { PrimaryButton } from "../../components/index";

const hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <div className="hero-subtitle">Welcome To Cyborg</div>
        <div className="hero-title">
          <em>Browse</em> Our Popular Games Here
        </div>
        <PrimaryButton text="Browse Now" />
      </div>
    </div>
  );
};

export default hero;
