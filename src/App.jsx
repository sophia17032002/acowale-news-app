// import React, {useState,useEffect} from "react";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";

// function App() {

//   const [articles,setArticles] = useState(null)

//   useEffect(()=>{

//     let url = ` https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=890868ed0dc9005ba8f2cbe066390b80`;
//     fetch(url)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         let articles = data.articles;
//         console.log(data);
//         if(articles.length===0){
//           alert("No article available according to your search! change your filters or query.")
//           return;
//         }
//         setArticles(articles);
//       });

//   },[]);

//   return (
//   <div>
//     <Header setArticles={setArticles}></Header>
//     <Body articles={articles}></Body>
//     <Footer/>
//   </div>

//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import Header from "./components/Header";
// import ContactUs from "./Contact"; 
// import Body from "./components/Body";
// import Footer from "./components/Footer";
// import CookiePreferences from "./CookiePreferences";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// function App() {
//   const [articles, setArticles] = useState(null);

//   useEffect(() => {
//     let url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=890868ed0dc9005ba8f2cbe066390b80`;
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         let articles = data.articles;
//         if (articles.length === 0) {
//           alert("No articles available. Please try again.");
//           return;
//         }
//         setArticles(articles);
//       });
//   }, []);

//   return (
//     <Router>
//       <div>
//         <Header setArticles={setArticles} />
//         <Routes>
//           <Route path="/" element={<Body articles={articles} />} />
//           <Route path="/cookie-preferences" element={<CookiePreferences />} />
//           <Route path="/contact" element={<ContactUs />} /> 
//           {/* Add other routes like Contact Us, Accessibility */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
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
    const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=890868ed0dc9005ba8f2cbe066390b80`;
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

