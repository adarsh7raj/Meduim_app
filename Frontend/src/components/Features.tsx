import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Why You'll Love Our Platform</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Easy to Use</h3>
            <p className="text-gray-600">Start writing and publishing your stories within minutes.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Grow Your Audience</h3>
            <p className="text-gray-600">Get discovered by readers from all around the world.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Monetize Your Content</h3>
            <p className="text-gray-600">Turn your passion into a full-time career by getting paid for your content.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
