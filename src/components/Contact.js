import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea id="message" className="w-full px-4 py-2 border rounded-lg" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900">Send Message</button>
            </form>
          </div>
          {/* Map */}
          <div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Our Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d903017.0356037149!2d36.815678299999995!3d0.29345449999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178635240419ec05%3A0x928ba7f70971d8de!2sLaikipia%20County%2C%20Kenya!5e1!3m2!1sen!2smu!4v1742297047490!5m2!1sen!2smu" 
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;