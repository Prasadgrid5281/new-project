import './App.css';
import Destinations from './components/destinations/Destinations';
import Discount from './components/discounts/Discount';
import Header from './components/header/Header';
import Hero from './components/hero-section/Hero';
import Stats from './components/statistics/Stats';
import Contact from './components/contact/Contact';
import Testimonial from './components/testimonials/Testimonial';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Stats/>
      <Destinations/>
      <Discount/>
      <Contact/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;
