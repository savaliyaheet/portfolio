import "./App.css";
import HeroSection from "./components/hero/HeroSection";
import Navbar from "./components/navbar/Navbar";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
