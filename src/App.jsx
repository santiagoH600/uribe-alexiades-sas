import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";
import Location from "./components/Location";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";
import WhatsAppButton from "./components/WhatsAppButton";

const App = () => {

  return (

    <div className="App_body">
      <Navbar className = "Nav_bar" />
      <Hero />
      <About />
      <Location />
      <ContactForm />
      <Footer />
      <WhatsAppButton/>
    </div>
  );
};

export default App;
