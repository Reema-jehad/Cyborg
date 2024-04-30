import "./library.css";
import {
  LibraryCard,
  SectionHeader,
  SectionWarapper,
} from "../../components/index";
import LibraryData from "../../data/LibraryData";

function library() {
  const cards = LibraryData.map(card => {
    return <LibraryCard key={card.id} image={card.image} title={card.title} category={card.category} date={card.date} hours={card.hours} download={card.downloaded}/>;
  });

  return (
    <>
      <SectionWarapper>
        <SectionHeader text="Your Gaming Library" />
        <div className="gaming-library-cards">
          {cards}
        </div>
        {/* <PrimaryButton>ddd</PrimaryButton> */}
      </SectionWarapper>
    </>
  );
}

export default library;
