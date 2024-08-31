import './App.scss';
import Header from './sections/Header/Header';
import Introductions from './sections/Introductions/Introductions';
import Features from './sections/Features/Features';
import Testimonials from './sections/Testimonials/Testimonials';
import Faqs from './sections/Faqs/Faqs';
import Footer from './sections/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Introductions />
      <Features />
      <Testimonials />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
