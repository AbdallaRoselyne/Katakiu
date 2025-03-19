import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          About Katakiu Initiative
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-700 mb-6">
              The Katakiu Initiative is a non-profit organization dedicated to
              achieving Sustainable Development Goal 6 (Clean Water and
              Sanitation) in the Upper Ewaso Nyiro Basin, particularly in
              Naibor. Our mission is to provide sustainable water solutions and
              improve sanitation for underserved communities.
            </p>
            <p className="text-gray-700 mb-6">
              We work closely with local communities, governments, and partners
              to implement innovative water purification systems, promote
              hygiene education, and ensure long-term access to clean water.
            </p>
          </div>
          <div className="bg-blue-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              A future where every community in the Upper Ewaso Nyiro Basin has
              access to clean, safe, and sustainable water, empowering lives,
              improving health, and fostering economic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
