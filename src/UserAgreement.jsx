import React from 'react';

const UserAgreement = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">User Agreement</h1>
      <p className="text-lg text-gray-600 mb-4">
        This User Agreement outlines the terms and conditions for using Acowale News. By accessing or using our site, you agree to comply with these terms.
      </p>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">1. Content Usage</h2>
      <p className="mt-2 text-gray-600">
        All content provided on this site is for informational purposes only. We are not responsible for the accuracy of information provided.
      </p>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">2. User Conduct</h2>
      <p className="mt-2 text-gray-600">
        Users must not engage in unlawful activities on the platform. This includes sharing malicious content, spamming, or violating any laws.
      </p>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">3. Termination</h2>
      <p className="mt-2 text-gray-600">
        We reserve the right to terminate your access to the site if you violate any terms outlined in this agreement.
      </p>
    </div>
  );
};

export default UserAgreement;
