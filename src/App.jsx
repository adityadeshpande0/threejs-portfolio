import "./App.css";
import Hero from "./sections/Hero";

import Navbar from "./sections/Navbar";

function App() {
  return (
    <main className="max-w-5xl mx-auto relative">
      <Navbar />
      <Hero />
    </main>
  );
}

export default App;
