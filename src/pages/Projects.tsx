
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ExternalLink, Github, Search } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    {
      title: "Slide it In",
      description: "A powerful presentation generator that transforms documents into beautiful slide decks using AI. 1,000+ users in 24 hours.",
      technologies: ["Go", "Next.js", "Google Cloud Platform"],
      link: "https://example.com/project1",
      github: "https://github.com/username/project1",
      image: "/lovable-uploads/3b2cc9c2-fb78-4794-b4e0-74195820de1b.png",
    },
    {
      title: "Resume Generator",
      description: "Professional resume builder with LaTeX support. Create ATS-friendly resumes with a few clicks.",
      technologies: ["React", "Node.js", "LaTeX"],
      link: "https://example.com/project2",
      github: "https://github.com/username/project2",
      image: "/placeholder.svg",
    },
    {
      title: "Campus Resource Tracker",
      description: "A web application for students to track and share campus resources like study spaces, events, and facilities.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://example.com/project3",
      github: "https://github.com/username/project3",
      image: "/placeholder.svg",
    },
    {
      title: "ML Data Visualization Dashboard",
      description: "Interactive dashboard to visualize machine learning results for campus research projects.",
      technologies: ["Python", "TensorFlow", "D3.js"],
      link: "https://example.com/project4",
      github: "https://github.com/username/project4",
      image: "/placeholder.svg",
    },
  ];

  const filteredProjects = projects.filter(project => {
    const projectText = `${project.title} ${project.description} ${project.technologies.join(' ')}`.toLowerCase();
    return projectText.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="py-6">
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="w-full p-3 pl-10 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-portfolio-brown"
              placeholder="search for a project, technology, etc."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden border rounded-lg hover:shadow-md transition-shadow">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                <CardContent className="p-5">
                  <h2 className="text-2xl font-medium mb-2">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-secondary text-secondary-foreground px-3 py-1 text-sm rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-brown hover:text-portfolio-brown/80 transition-colors"
                        aria-label="View source code on GitHub"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-portfolio-blue hover:text-portfolio-blue/80 transition-colors"
                        aria-label="Visit project"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
