import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import ProductDetails from './components/ProductDetails';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App
