import "./buttons.css";

const PrimaryButton = (props) => {
  return <div className="primary-button button"><a href="/#">{props.text}</a></div>;
};
const SecondaryButton = (props) => {
  return <div className="seconary-button button"><a href="/#">{props.text}</a></div>;
};

export default PrimaryButton;
export { SecondaryButton };
