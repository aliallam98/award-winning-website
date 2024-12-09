import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
