import "./sectionWrapper.css";

const sectionWrapper = (props) => {
  return <div className="section-wrapper">{props.children}</div>;
};

export default sectionWrapper;
