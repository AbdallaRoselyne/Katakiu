import React from "react";

const Impact = () => {
  return (
    <section id="impact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Statistic 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-800 mb-4">100+</h3>
            <p className="text-gray-700">People provided with clean water</p>
          </div>
          {/* Statistic 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-800 mb-4">2+</h3>
            <p className="text-gray-700">Communities engaged</p>
          </div>
          {/* Statistic 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-800 mb-4">50</h3>
            <p className="text-gray-700">
              Trees planted to support water conservation
            </p>
          </div>
        </div>
        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            What People Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">
                "Thanks to the Katakiu Initiative, our community library now has
                access to clean water. Life has changed for the better!"
              </p>
              <p className="text-gray-900 font-semibold mt-4">
                - Stanley Kinyua, Naibor Community Leader
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 italic">
                "I am grateful to the Katakiu Initiative for the rainwater
                harvesting tank and hand washing stations. My family now has
                clean water and better hygiene."
              </p>
              <p className="text-gray-900 font-semibold mt-4">
                - Magdalene Mutua, Community member
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
