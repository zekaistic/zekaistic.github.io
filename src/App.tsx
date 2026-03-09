import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Journey } from "./components/Journey";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section id="hero" className="section section-hero">
          <Hero />
        </section>
        <section id="skills" className="section section-skills">
          <Skills />
        </section>
        <section id="journey" className="section section-journey">
          <Journey />
        </section>
        <section id="contact" className="section section-contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

