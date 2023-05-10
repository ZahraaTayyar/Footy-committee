import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import JoinUs from "./components/JoinUs"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/joinus" element={<JoinUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
