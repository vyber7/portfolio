import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/nav";
import Projects from "./components/projects";
import Certs from "./components/certifications";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Certs />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
