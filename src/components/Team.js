import React from "react";

const teamMembers = [
  {
    name: "Roselyne Osundwa",
    role: "Founder",
    description: "Roselyne is passionate about sustainable development and has over 10 years of experience in water resource management.",
    image: "img.jpg",
  },
  {
    name: "Brenda Nkatha",
    role: "Project Manager",
    description: "Brenda oversees the implementation of the projects and ensures community engagement.",
    image: "bree.png",
  },
  {
    name: "Stanley Kinyua",
    role: "Community Liaison",
    description: "Stanley works directly with local communities to promote hygiene and sanitation practices.",
    image: "/images/alice-johnson.jpg",
  },
  
];

const Team = () => {
    return (
      <section id="team" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-800 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Team;