import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="w-full py-4 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">Medium </div>
        <div className="space-x-8 text-gray-600">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
         <Link to="/signup"><button className="bg-black text-white px-4 py-2 rounded-lg">Sign Up</button></Link> 
        <Link to="/signin"> <button className="bg-black text-white px-4 py-2 rounded-lg">Login in</button></Link> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
