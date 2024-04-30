import "./featured.css";
import { SectionWarapper, SectionHeader, FeaturedCard } from "../../components/index";
import featured_1 from "../../images/featured-01.jpg"
import featured_2 from "../../images/featured-02.jpg"
import featured_3 from "../../images/featured-03.jpg"

const featured = () => {
  return (
    <div className="w-75">
      <SectionWarapper  >
        <SectionHeader text="Featured Games" />
        <div className="Featured-cards d-flex">
        <FeaturedCard image={featured_1 } title="CS-GO" rate="4.8" downloads="249k Downloads" number="2.3M"/>
        <FeaturedCard image={featured_2 } title="Gamezer" rate="4.8" downloads="249k Downloads" number="2.3M"/>
        <FeaturedCard image={featured_3 } title="Island Rusty" rate="4.8" downloads="249k Downloads" number="2.3M"/>
        </div>
      </SectionWarapper>
    </div>
  );
};

export default featured;
