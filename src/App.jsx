import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accessibility from './pages/Accessibility';
import CookiePreferences from './pages/CookiePreferences';
import Contact from './pages/Contact';

function App() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetchDefaultNews();
  }, []);

  const fetchDefaultNews = () => {
    const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=YOUR_API_KEY`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.articles.length === 0) {
          alert("No article available according to your search! Change your filters or query.");
          return;
        }
        setArticles(data.articles);
      });
  };

  return (
    <Router>
      <Header setArticles={setArticles} />
      <Routes>
        <Route path="/" element={<Body articles={articles} />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/cookie-preferences" element={<CookiePreferences />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

