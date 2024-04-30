import "./sectionHeader.css";

const sectionHeader = (props) => {
  return (
    <div className="section-header">
      <h4>{props.text}</h4>
    </div>
  );
};

export default sectionHeader;
