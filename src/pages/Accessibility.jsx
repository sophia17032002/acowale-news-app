import React from 'react';

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Accessibility</h1>
      <p className="text-lg text-gray-600 mb-4">
        At Acowale News, we are committed to ensuring digital accessibility for all. We continuously work to improve the user experience for everyone.
      </p>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Steps We've Taken</h2>
      <ul className="list-disc list-inside mt-2 space-y-2 text-gray-600">
        <li>All images have descriptive alt text.</li>
        <li>We provide keyboard navigation for all interactive elements.</li>
        <li>We ensure proper contrast ratios for readability.</li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Contact Us</h2>
      <p className="mt-2 text-gray-600">
        If you experience any issues or have suggestions for improvement, please <a href="/contact" className="text-blue-600 underline">contact us</a>.
      </p>
    </div>
  );
};

export default Accessibility;
