import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/nav";
import Services from "./components/services";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
      <Nav />
    </>
  );
};

export default App;
