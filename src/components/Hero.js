import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Empowering Communities with Clean Water</h1>
        <p className="text-xl mb-8">Join us in achieving SDG 6: Clean Water and Sanitation in the Upper Ewaso Nyiro Basin.</p>
        <div className="space-x-4">
          <a href="#get-involved" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100">Get Involved</a>
          <a href="#projects" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800">Our Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;