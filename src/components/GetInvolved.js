import React from "react";

const GetInvolved = () => {
  return (
    <section id="get-involved" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get Involved</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Donate Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">Donate</h3>
            <p className="text-gray-700 mb-6">
              Your contribution helps us provide clean water to communities in
              need.
            </p>
            <a
              href="#donate"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900"
            >
              Donate Now
            </a>
          </div>
          {/* Volunteer Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">Volunteer</h3>
            <p className="text-gray-700 mb-6">
              Join our team and make a difference on the ground.
            </p>
            <a
              href="#volunteer"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900"
            >
              Volunteer Now
            </a>
          </div>
          {/* Partner Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4">Partner</h3>
            <p className="text-gray-700 mb-6">
              Collaborate with us to achieve sustainable development goals.
            </p>
            <a
              href="#partner"
              className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
