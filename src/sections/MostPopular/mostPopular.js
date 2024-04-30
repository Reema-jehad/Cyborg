import "./mostPopular.css";
import { Card, SectionHeader, SectionWarapper } from "../../components/index";
import MostPopularData from "../../data/MostPopularIData";

const mostPopular = () => {
  const cards = MostPopularData.map(card => {
    return <Card key={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download}/>;
  });
  return (
    <>
      <SectionWarapper>
        <SectionHeader text="Most Popular" />
        <div className="most-popular-items">{cards} </div>
      </SectionWarapper>
    </>
  );
};

export default mostPopular;
