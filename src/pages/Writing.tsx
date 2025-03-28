
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar } from 'lucide-react';

const Writing = () => {
  const articles = [
    {
      title: "Building Responsive Web Applications with React",
      date: "March 15, 2024",
      summary: "A comprehensive guide to creating responsive web applications using React and modern CSS techniques.",
      link: "/blog/responsive-web-apps",
      tags: ["React", "CSS", "Web Development"]
    },
    {
      title: "Introduction to Machine Learning for CS Students",
      date: "February 28, 2024",
      summary: "An overview of machine learning concepts and how computer science students can get started in this field.",
      link: "/blog/intro-to-ml",
      tags: ["Machine Learning", "Python", "Data Science"]
    },
    {
      title: "My Experience at the University Hackathon",
      date: "January 20, 2024",
      summary: "Reflections on participating in and organizing hackathons at Machakos University.",
      link: "/blog/hackathon-experience",
      tags: ["Hackathons", "Student Life", "Programming"]
    },
    {
      title: "The Future of Mobile App Development",
      date: "December 5, 2023",
      summary: "Exploring emerging trends and technologies in mobile application development for 2024 and beyond.",
      link: "/blog/future-of-mobile-apps",
      tags: ["Mobile Development", "Technology Trends", "React Native"]
    },
  ];

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="py-8">
          <h1 className="text-3xl font-semibold mb-8">Writing</h1>
          
          <div className="space-y-8">
            {articles.map((article, index) => (
              <div key={index} className="border-b pb-6 last:border-b-0">
                <h2 className="text-xl font-medium mb-2">
                  <a href={article.link} className="hover:text-portfolio-brown transition-colors">
                    {article.title}
                  </a>
                </h2>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{article.date}</span>
                </div>
                
                <p className="mb-3">{article.summary}</p>
                
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-secondary text-secondary-foreground px-2 py-1 text-xs rounded">
                      {tag}
                    </span>
                  ))}
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

export default Writing;
