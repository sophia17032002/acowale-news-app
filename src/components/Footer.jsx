import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; 2024 Acowale News. All rights reserved.</p>
      <div className="mt-2">
        <Link to="/accessibility" className="text-blue-400 hover:underline mx-2">Accessibility</Link>
        <Link to="/cookie-preferences" className="text-blue-400 hover:underline mx-2">Cookie Preferences</Link>
        <Link to="/contact" className="text-blue-400 hover:underline mx-2">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
