import { useContext, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import OurWork from './pages/OurWork';
import SingleWork from './pages/SingleWork';
import ServerAdmin from './pages/ServerAdmin';
import LayComponents from './components/Layout/layoutComponents';
import { jwtDecode } from "jwt-decode";
import { AppContext } from './context/AppContext';
function App() {
  
  const { setLogin } = useContext(AppContext);
  const isTokenExpired = (expirationTimestamp) => {
    const currentTimestamp = Math.floor(Date.now() / 1000);
    return currentTimestamp >= expirationTimestamp;
  };
  
  // Function to handle token expiration
  const handleTokenExpiration = () => {
    const tokenExpiration = localStorage.getItem('expired');

    if (tokenExpiration) {
      const expirationTimestamp = parseInt(tokenExpiration, 10);
      if (isTokenExpired(expirationTimestamp)) {
        // Clear token and logout user
        localStorage.removeItem('token');
        localStorage.removeItem('expired');
        // Redirect to login page
        window.location.href = '/login'; // or use router navigation if using a router
        // Optionally notify the user
        alert('Your session has expired. Please log in again.');
      }
    }
  };
  handleTokenExpiration();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const decodedToken = jwtDecode(token);
            if (decodedToken.loginAlready) {
                setLogin(true)
            }
        } catch (error) {
            // Handle invalid token
            console.error('Error decoding token:', error);
            // Optionally, clear the invalid token from local storage
            localStorage.removeItem('token');
            setLogin(false);
        }
    }
  }, []);
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
