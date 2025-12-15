import React from 'react';
import './App.css' 
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx';
import Contact from './pages/Contact.jsx';
import Refill from './pages/Refill.jsx';
import BackToTop from './components/BackToTop.jsx';
import Services from './pages/Services.jsx';
import BookAnAppointment from './pages/BookAnAppointment.jsx';


function App() {
 
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/refill" element={<Refill />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book-an-appointment" element={<BookAnAppointment />} />
        </Routes>
        <Footer />
        <BackToTop />
      </Router>
    </React.Fragment>
  )
}

export default App
