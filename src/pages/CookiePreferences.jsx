import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CookiePreferences = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    analytics: false,
    personalizedAds: false,
  });

  const handleSavePreferences = () => {
    // Save preferences to localStorage (or backend) and redirect to homepage
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    navigate('/');
  };

  const handleTogglePreference = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="p-8 bg-white text-gray-800 max-w-3xl mx-auto mt-8 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold mb-6">Cookie Preferences</h1>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <label className="font-medium">Allow Analytics Cookies</label>
          <input
            type="checkbox"
            checked={preferences.analytics}
            onChange={() => handleTogglePreference('analytics')}
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="font-medium">Allow Personalized Ads</label>
          <input
            type="checkbox"
            checked={preferences.personalizedAds}
            onChange={() => handleTogglePreference('personalizedAds')}
          />
        </div>
      </div>
      <button
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        onClick={handleSavePreferences}
      >
        Save Preferences
      </button>
    </div>
  );
};

export default CookiePreferences;
