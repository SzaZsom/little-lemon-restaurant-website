import Navigation from './components/Navigation';
import Heading from './components/Heading';
import Specials from './components/Specials';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import "./App.css"

function App() {
  return (
    <>
      <Navigation />
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
