const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Initiative Details */}
          <div>
            <h3 className="text-xl font-bold mb-4">Katakiu Initiative</h3>
            <p className="text-gray-300">
              Providing clean water and sanitation for a better future.
            </p>
          </div>

          {/* SDG Goals */}
          <div>
            <h3 className="text-xl font-bold mb-4">SDG Goals</h3>
            <ul className="text-gray-300">
              <li>SDG 6: Clean Water and Sanitation</li>
              <li>SDG 3: Good Health and Well-being</li>
              <li>SDG 11: Sustainable Cities and Communities</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-300">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">Email: info@katakiu.org</p>
            <p className="text-gray-300">Phone: +254 700 000 000</p>
          </div>
        </div>

        {/* Copyright and SDG Badges */}
        <div className="text-center mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Katakiu Initiative. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
