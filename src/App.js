import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";        // Points into pages folder
import Advisory from "./pages/Advisory";  // Points into pages folder
import About from "./pages/About";      // Points into pages folder
import "./App.css"; 

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <div className="logo">Heatwave Intel</div>
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/subscribe" className="nav-link">Subscribe</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </header>

      <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscribe" element={<Advisory />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
