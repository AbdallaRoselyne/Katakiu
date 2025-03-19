import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    description: "John is passionate about sustainable development and has over 10 years of experience in water resource management.",
    image: "/images/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    description: "Jane oversees the implementation of water purification projects and ensures community engagement.",
    image: "/images/jane-smith.jpg",
  },
  {
    name: "Alice Johnson",
    role: "Community Liaison",
    description: "Alice works directly with local communities to promote hygiene and sanitation practices.",
    image: "/images/alice-johnson.jpg",
  },
  
];

const Team = () => {
  return (
    <section id="team" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
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