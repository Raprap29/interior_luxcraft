import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import OurWork from './pages/OurWork';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleWork from './pages/SingleWork';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/ourwork' element={<OurWork />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/singlework' element={<SingleWork />} />
        </Routes>
        <div className='container mx-auto'>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
