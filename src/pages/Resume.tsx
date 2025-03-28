
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">Resume</h1>
            <button className="flex items-center text-sm px-3 py-2 border rounded hover:bg-secondary transition-colors">
              <Download size={14} className="mr-1" /> Download PDF
            </button>
          </div>
          
          <div className="space-y-8">
            {/* Education Section */}
            <section>
              <h2 className="text-xl font-medium mb-4 pb-2 border-b">Education</h2>
              <div className="ml-1">
                <h3 className="font-medium">Bachelor of Science in Computer Science</h3>
                <p className="text-muted-foreground">Machakos University | 2022 - 2025 (Expected)</p>
                <p className="mt-2">Relevant coursework: Data Structures & Algorithms, Database Systems, Web Development, Machine Learning, Mobile App Development</p>
              </div>
            </section>
            
            {/* Experience Section */}
            <section>
              <h2 className="text-xl font-medium mb-4 pb-2 border-b">Experience</h2>
              
              <div className="space-y-5 ml-1">
                <div>
                  <h3 className="font-medium">Software Engineering Intern</h3>
                  <p className="text-muted-foreground">Company X | Summer 2025 (Upcoming)</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>Will be working on full-stack web development projects</li>
                    <li>Collaborating with the product team to implement new features</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">Research Assistant</h3>
                  <p className="text-muted-foreground">Tech Lab, Machakos University | 2023 - Present</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>Conducting research in data science and machine learning applications</li>
                    <li>Developed a data visualization dashboard for university research projects</li>
                    <li>Collaborated with faculty and other students on research papers</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">Web Developer</h3>
                  <p className="text-muted-foreground">Student Developer Club | 2022 - 2023</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                    <li>Built responsive websites for various campus events and initiatives</li>
                    <li>Implemented a payment gateway for university event ticketing platform</li>
                    <li>Mentored junior students in web development technologies</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* Skills Section */}
            <section>
              <h2 className="text-xl font-medium mb-4 pb-2 border-b">Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 ml-1">
                <div>
                  <h3 className="font-medium">Programming Languages</h3>
                  <p className="text-sm">Python, JavaScript, Java, C++, HTML/CSS</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Frameworks & Libraries</h3>
                  <p className="text-sm">React.js, Node.js, Django, TensorFlow, Pandas</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Tools & Technologies</h3>
                  <p className="text-sm">Git, Docker, AWS, Firebase, MongoDB, SQL</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Soft Skills</h3>
                  <p className="text-sm">Problem Solving, Team Leadership, Communication, Project Management</p>
                </div>
              </div>
            </section>
            
            {/* Projects Section */}
            <section>
              <h2 className="text-xl font-medium mb-4 pb-2 border-b">Notable Projects</h2>
              
              <div className="space-y-4 ml-1">
                <div>
                  <h3 className="font-medium">Campus Resource Tracker</h3>
                  <p className="text-sm text-muted-foreground">React, Node.js, MongoDB</p>
                  <p className="text-sm mt-1">A web application for students to track and share campus resources like study spaces, events, and facilities.</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Campus Mobile App</h3>
                  <p className="text-sm text-muted-foreground">React Native, Firebase, Redux</p>
                  <p className="text-sm mt-1">Led the development of the official university mobile app for students and faculty.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
