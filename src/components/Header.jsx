import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ setArticles }) {
  const [filterFlag, setFilterFlag] = useState(false);
  const [display, setDisplay] = useState('hidden');
  const [country, setCountry] = useState('in');
  const [language, setLanguage] = useState('en');
  const [category, setCategory] = useState('general');
  const [sortBy, setSortBy] = useState('relevance');
  const [query, setQuery] = useState('');

  const countryCodes = {
    Australia: 'au',
    Brazil: 'br',
    Canada: 'ca',
    China: 'cn',
    Egypt: 'eg',
    France: 'fr',
    Germany: 'de',
    Greece: 'gr',
    'Hong Kong': 'hk',
    India: 'in',
    Ireland: 'ie',
    Israel: 'il',
    Italy: 'it',
    Japan: 'jp',
    Netherlands: 'nl',
    Norway: 'no',
    Pakistan: 'pk',
    Peru: 'pe',
    Philippines: 'ph',
    Portugal: 'pt',
    Romania: 'ro',
    'Russian Federation': 'ru',
    Singapore: 'sg',
    Spain: 'es',
    Sweden: 'se',
    Switzerland: 'ch',
    Taiwan: 'tw',
    Ukraine: 'ua',
    'United Kingdom': 'gb',
    'United States': 'us'
  };

  const languageCodes = {
    Arabic: 'ar',
    Chinese: 'zh',
    Dutch: 'nl',
    English: 'en',
    French: 'fr',
    German: 'de',
    Greek: 'el',
    Hebrew: 'he',
    Hindi: 'hi',
    Italian: 'it',
    Japanese: 'ja',
    Malayalam: 'ml',
    Marathi: 'mr',
    Norwegian: 'no',
    Portuguese: 'pt',
    Romanian: 'ro',
    Russian: 'ru',
    Spanish: 'es',
    Swedish: 'sv',
    Tamil: 'ta',
    Telugu: 'te',
    Ukrainian: 'uk'
  };

  const categories = {
    General: "general",
    World: "world",
    Nation: "nation",
    Business: "business",
    Technology: "technology",
    Entertainment: "entertainment",
    Sports: "sports",
    Science: "science",
    Health: "health"
  };

  function handleFilterFlag() {
    setFilterFlag(!filterFlag);
    setDisplay(display === '' ? 'hidden' : '');
  }

  function handleSearch() {
    let url = `https://gnews.io/api/v4/top-headlines?q=${query}&lang=${language}&country=${country}&sortby=${sortBy}&category=${category}&max=10&apikey=YOUR_API_KEY`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let articles = data.articles;
        if (articles.length === 0) {
          alert("No article available according to your search! Change your filters or query.");
          return;
        }
        setArticles(articles);
      });
  }

  function handleFilter() {
    handleFilterFlag();
    handleSearch();
  }

  function handleQuery(q) {
    q = q.trim();
    setQuery(q === '' ? 'None' : `"${q}"`);
  }

  function handleClearFilters() {
    setCountry('in');
    setLanguage('en');
    setCategory('general');
    setSortBy('relevance');
    setQuery('');
    handleSearch();
  }

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/" className="hover:text-gray-400">Acowale News</Link>
      </div>
      <div className="flex items-center space-x-4">
        <input
          onChange={(e) => handleQuery(e.target.value)}
          className='px-2 h-10 text-black rounded-lg'
          type="text"
          placeholder='Search News Here'
        />
        <button
          onClick={handleSearch}
          className='border border-white w-20 h-8 mt-1 hover:bg-gray-600 hover:text-white active:bg-gray-700 rounded-lg'
        >
          Search
        </button>
        <button
          onClick={handleFilterFlag}
          className='border border-white rounded-lg w-20 h-10 hover:bg-gray-600 hover:text-white active:bg-gray-700'
        >
          {filterFlag ? 'Close' : 'Filter'}
        </button>
      </div>
      {filterFlag && (
        <div className={`flex flex-wrap gap-4 bg-gray-700 p-4 rounded-md ${display}`}>
          <select
            className='rounded-lg border border-gray-300 text-gray-700 px-4 py-2'
            onChange={(e) => setCountry(e.target.value)}
            value={country}
          >
            {Object.entries(countryCodes).map(([country, code]) => (
              <option key={code} value={code}>{country}</option>
            ))}
          </select>
          <select
            className='rounded-lg border border-gray-300 text-gray-700 px-4 py-2'
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
          >
            {Object.entries(languageCodes).map(([language, code]) => (
              <option key={code} value={code}>{language}</option>
            ))}
          </select>
          <select
            className='rounded-lg border border-gray-300 text-gray-700 px-4 py-2'
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Object.entries(categories).map(([categoryK, categoryV]) => (
              <option key={categoryV} value={categoryV}>{categoryK}</option>
            ))}
          </select>
          <select
            className='rounded-lg border border-gray-300 text-gray-700 px-4 py-2'
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            <option value="relevance">Relevance</option>
            <option value="publishedAt">Published At</option>
          </select>
          <button
            onClick={handleFilter}
            className='border border-white rounded-lg w-24 h-10 hover:bg-gray-600 hover:text-white active:bg-gray-700'
          >
            Apply Filters
          </button>
          <button
            onClick={handleClearFilters}
            className='border border-white rounded-lg w-24 h-10 hover:bg-gray-600 hover:text-white active:bg-gray-700'
          >
            Clear Filters
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
