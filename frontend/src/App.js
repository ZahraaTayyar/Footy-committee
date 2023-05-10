import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import JoinUs from "./components/JoinUs"

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
