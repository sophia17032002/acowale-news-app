import React from 'react';
import ImageWithPlaceholder from './ImageWithPlaceholder';

function Body({ articles, fetchArticles }) {
  const getDiff = (time) => {
    const now = new Date();
    const past = new Date(time);
    const diffMs = now - past;

    const years = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diffMs - years * 1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24 * 30)) % 12;
    const days = Math.floor((diffMs - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30) / (1000 * 60 * 60 * 24)) % 30;
    const hours = Math.floor((diffMs - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30 - days * 1000 * 60 * 60 * 24) / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor((diffMs - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30 - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60) / (1000 * 60)) % 60;
    const seconds = Math.floor((diffMs - years * 1000 * 60 * 60 * 24 * 365 - months * 1000 * 60 * 60 * 24 * 30 - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000) % 60;

    if (years) return `${years} years ago`;
    if (months) return `${months} months ago`;
    if (days) return `${days} days ago`;
    if (hours) return `${hours} hours ago`;
    if (minutes) return `${minutes} minutes ago`;
    if (seconds) return `${seconds} seconds ago`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-8">
        {articles && articles.length !== 0 &&
          articles.map((article, index) => (
            <div key={index} className="w-full sm:w-80 md:w-96 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <ImageWithPlaceholder
                  src={article["image"]}
                  alt={article["title"]}
                  placeholder="https://www.drsubhashr.com/wp-content/uploads/2018/12/news-placeholder.png"
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between mb-3 text-xs text-gray-500">
                    <a className="text-blue-500 font-semibold hover:underline" href={article["source"]["url"]} target="_blank" rel="noopener noreferrer">
                      {article["source"]["name"]}
                    </a>
                    <div className="italic">{getDiff(article["publishedAt"])}</div>
                  </div>
                  <div className="font-semibold text-lg text-gray-700 mb-2">
                    {article["title"].length >= 100 ? article["title"].slice(0, 100) + "..." : article["title"]}
                  </div>
                  <div className="text-gray-600 mb-4">
                    {article["description"].length >= 200 ? article["description"].slice(0, 200) + "..." : article["description"]}
                  </div>
                  <a href={article["url"]} target="_blank" rel="noreferrer">
                    <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Body;
