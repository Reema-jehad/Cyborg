import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"

import { Container } from "./components/index";
import { Header, Footer } from "./sections/index";
import { Home ,Browse} from "./Pages/index";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Browse" element={<Browse />} /> */}
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
