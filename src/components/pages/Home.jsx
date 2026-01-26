import Navbar from "../common/Navbar";
import Hero from "../sections/Hero";
import Portfolio from "../sections/Portfolio";
import Services from "../sections/Services";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../common/Footer";
import StatsSection from "../sections/StatsSection";
import ReelsSection from "../sections/ReelsSection";
import Appointment from "../sections/Appointment";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <About />
      <Services />
      
      <Portfolio />
      <ReelsSection />
      <Testimonials />
      <Appointment />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
