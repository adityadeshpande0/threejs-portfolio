import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";

import Navbar from "./sections/Navbar";

function App() {
  return (
    <main className="max-w-6xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
