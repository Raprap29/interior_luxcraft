import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import OurWork from './pages/OurWork';
import SingleWork from './pages/SingleWork';
import ServerAdmin from './pages/ServerAdmin';
import LayComponents from './components/Layout/layoutComponents';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={
            <LayComponents>
              <Home />
            </LayComponents>
          } />
          <Route path='/services' element={
            <LayComponents>
              <Services />
            </LayComponents>
          } />
          <Route path='/ourwork' element={
            <LayComponents>
              <OurWork />
            </LayComponents>
          } />
          <Route path='/contact' element={
            <LayComponents>
              <Contact />
            </LayComponents>
          } />
          <Route path='/singlework' element={
            <LayComponents>
              <SingleWork />
            </LayComponents>
          } />
          <Route path='/admin/server' element={<ServerAdmin />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
