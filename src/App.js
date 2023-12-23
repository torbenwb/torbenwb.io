import logo from "./logo.svg";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Router, Route, Routes, HashRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { SiteNav } from "./components/SiteNav";

function App() {
  return (
    <Container>
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Container>
  );
}

export default App;
