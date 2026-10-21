import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";        
import Advisory from "./pages/Advisory";  
import About from "./pages/About";      
import Calc from "./pages/calc";
import "./App.css"; 

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <div className="logo">Heatwave Intel System</div>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/subscribe" className="nav-link">Subscribe</Link>
          <Link to="/calculator" className="nav-link">Calculator</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </header>

      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Advisory />} />
          <Route path="/calculator" element={<Calc />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
