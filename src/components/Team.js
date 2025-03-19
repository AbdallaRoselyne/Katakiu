import React from "react";

const teamMembers = [
  {
    name: "Roselyne Osundwa",
    role: "Founder",
    description:
      "Passionate about sustainable water solutions and environmental conservation, Roselyne founded the Katakiu Initiative to provide clean water access and promote sustainability in underserved communities. With a background in computing and project management, she drives the initiative’s vision and strategic direction.",
    image: "img.jpg",
  },
  {
    name: "Brenda Nkatha",
    role: "Project Manager",
    description:
      "Overseeing project execution and logistics, Brenda ensures the successful implementation of rainwater harvesting and tree planting initiatives. With expertise in resource management and planning, they streamline operations to maximize impact.",
    image: "bree.png",
  },
  {
    name: "Stanley Kinyua",
    role: "Community Liaison",
    description:
      "Bridging the gap between the initiative and local communities, Kinyua fosters strong relationships, ensuring projects align with community needs. They lead engagement efforts, facilitating training and awareness programs on water conservation and hygiene",
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
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
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
