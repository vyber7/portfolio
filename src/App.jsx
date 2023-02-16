import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/nav";
import Projects from "./components/projects";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <Nav />
    </>
  );
};

export default App;
