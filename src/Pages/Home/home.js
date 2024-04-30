import "./home.css";
import { Hero, MostPopular, Library } from "../../sections/index";

const home = () => {
  return (
    <>
      <Hero />
      <MostPopular />
      <Library />
    </>
  );
};

export default home;
