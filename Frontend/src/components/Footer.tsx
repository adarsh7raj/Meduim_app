import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto text-center">
        <p>© 2024 Medium. All rights reserved.</p>
        <div className="mt-4">
          <a href="#about" className="mx-2">About</a>
          <a href="#privacy" className="mx-2">Privacy Policy</a>
          <a href="#terms" className="mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
