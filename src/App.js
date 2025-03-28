import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Head } from "./components/head/Head";
import { useEffect } from "react";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
import ScrollToTop from "react-scroll-to-top";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <ScrollToTop smooth />
      <Head />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
