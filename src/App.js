import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router basename="react-pizza-website">
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/menu" exact Component={Menu} />
          <Route path="/about" exact Component={About} />
          <Route path="/contact" exact Component={Contact} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
