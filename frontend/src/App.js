import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import JoinUs from "./components/JoinUs"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Volunteers from "./components/Volunteers";
import ContactUs from "./components/ContactUs";
import FormJoin from "./components/FormJoin";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/volunteer" element={<Volunteers />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/joinform" element={<FormJoin />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
