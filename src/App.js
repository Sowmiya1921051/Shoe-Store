import React from 'react';
import './App.css';
import shoe1 from './shoe1.jpg'
import shoe2 from './shoe2.jpg'
function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <h1>Shoe Store👢</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Men's</a></li>
            <li><a href="#">Women's</a></li>
            <li><a href="#">Kids</a></li>
          </ul>
        </nav>
      </header>
      <section className="landing-section">
        <h2>Welcome to our Shoe Store</h2>
        <p>Shop the latest trends in footwear. Find the perfect pair of shoes for any occasion.</p>
        <a href="#" className="cta-button">Shop Now</a>
        
      </section>
      <section className="product-section">
        <h2>Featured Products</h2>
        <div className="product-card">
          <img src={shoe1} alt="Shoe 1" />
          <h3>Adidas</h3>
          <p>Price: $99.99</p>
          <a href="#">Buy Now</a>
        </div>
        <div className="product-card">
          <img src={shoe2} alt="Shoe 2" />
          <h3>Sneakers</h3>
          <p>Price: $89.99</p>
          <a href="#">Buy Now</a>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Shoe Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
