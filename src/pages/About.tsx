
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="py-8">
          <h1 className="text-3xl font-semibold mb-6">About Me</h1>
          
          <div className="prose max-w-none">
            <p className="mb-4">
              Hello! I'm Denis Mutwiri, a Computer Science student at Machakos University with a passion for software development and technology innovation.
            </p>
            
            <p className="mb-4">
              I'm constantly exploring new technologies and frameworks, with a particular interest in web development, machine learning, and mobile applications. My goal is to create software that makes a positive impact and solves real-world problems.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Education</h2>
            <p className="mb-4">
              <strong>Bachelor of Science in Computer Science</strong><br />
              Machakos University<br />
              Expected Graduation: 2025
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Skills</h2>
            <ul className="list-disc pl-5 mb-4">
              <li><strong>Languages:</strong> Python, JavaScript, Java, C++, HTML/CSS</li>
              <li><strong>Frameworks:</strong> React, Node.js, Django, TensorFlow</li>
              <li><strong>Tools:</strong> Git, Docker, AWS, Firebase</li>
              <li><strong>Soft Skills:</strong> Problem-solving, Communication, Team Leadership</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Interests</h2>
            <p className="mb-4">
              When I'm not coding, you can find me reading about new technologies, participating in hackathons, or contributing to open-source projects. I'm also passionate about mentoring and helping others learn programming.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
