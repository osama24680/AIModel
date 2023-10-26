import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Features from "./Components/Features";
import Projects from "./Components/Projects";
import FAQs from "./Components/FAQs";
import Team from "./Components/Team";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Projects />
      <FAQs />
      <Team />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
