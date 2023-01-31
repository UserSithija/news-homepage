import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Hero from "./Component/Hero/Hero";
import CardComp from "./Component/CardsComp/CardComp";
import Container from "react-bootstrap/esm/Container";
function App() {
  return (
    <div className="App">
      <Container>
        <Hero />
        <CardComp />
      </Container>
    </div>
  );
}

export default App;
