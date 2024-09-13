import Navbar from "./Navbar";
import Content from "./Content";
import Skills from "./Skills";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <Skills />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
