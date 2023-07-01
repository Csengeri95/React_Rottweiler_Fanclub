import './App.scss';
import Navbar from './components/Navbar';
import { HashRouter as Router } from "react-router-dom";
import Content from './components/Content';
import Home from './pages/Home';
import Introduce from './pages/Introduce';
import Footer from './components/Footer';
import Events from './pages/Events';
import { useEffect, useState } from 'react';
import Contact from './pages/Contact';
import { NavbarContext, NavbarContextDefaults } from './contexts/NavbarContext';

const config = require("../package.json");

function App() {

  const [navbar, setNavbar] = useState(NavbarContextDefaults.value)

  const pages = [
    { id: 1, name: "Kezdőlap", path: "/", element: <Home /> },
    { id: 2, name: "Bemutatás", path: "/introduce", element: <Introduce /> },
    { id: 3, name: "Események", path: "/events", element: <Events /> },
    { id: 4, name: "Kapcsolat", path: "/contact", element: <Contact /> },
  ]

  useEffect(() => {
    document.title = config.name
  })


  return (
    <NavbarContext.Provider value={{ navbar, setNavbar }} >
      <div className="App">



        <Router>

          <Navbar pages={pages} />
          <Content routes={pages} />
          <Footer />

        </Router>
      </div>
    </NavbarContext.Provider>
  );
}

export default App;
