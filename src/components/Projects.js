import React from "react";

const projects = [
  {
    title: " Rainwater harvesting tanks",
    description:
      "The Katakiu Initiative donated a rainwater harvesting tank to the Shed a Light Initiative in Naibor, providing a sustainable water source for their community library.",
    image: "rainwater-tank.png",
  },
  {
    title: " Tree Planting ",
    description:
      "Promoting environmental sustainability through tree planting initiatives to restore ecosystems and support water conservation efforts.",
    image: "tree-planting.jpg",
  },
  {
    title: "Handwashing Awareness",
    description:
      "Promoting hygiene and sanitation by educating communities on proper handwashing practices and providing access to handwashing stations.",
    image: "hand-wash.jpeg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={`/${project.image}`}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
