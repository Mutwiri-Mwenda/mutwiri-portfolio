
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Campus Resource Tracker",
      description: "A web application for students to track and share campus resources like study spaces, events, and facilities.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://example.com/project1",
      github: "https://github.com/username/project1",
    },
    {
      title: "ML Data Visualization Dashboard",
      description: "Interactive dashboard to visualize machine learning results for campus research projects.",
      technologies: ["Python", "TensorFlow", "D3.js"],
      link: "https://example.com/project2",
      github: "https://github.com/username/project2",
    },
    {
      title: "Payment Gateway Integration",
      description: "Implemented a secure payment system for the university event ticketing platform.",
      technologies: ["JavaScript", "Stripe API", "Express"],
      link: "https://example.com/project3",
      github: "https://github.com/username/project3",
    },
    {
      title: "Campus Mobile App",
      description: "Led the development of the official university mobile app for students and faculty.",
      technologies: ["React Native", "Firebase", "Redux"],
      link: "https://example.com/project4",
      github: "https://github.com/username/project4",
    },
  ];

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="py-8">
          <h1 className="text-3xl font-semibold mb-8">Projects</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-medium mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-secondary text-secondary-foreground px-2 py-1 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm flex items-center text-portfolio-blue hover:underline"
                  >
                    <ExternalLink size={14} className="mr-1" /> View Project
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm flex items-center text-portfolio-brown hover:underline"
                  >
                    <Github size={14} className="mr-1" /> Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
