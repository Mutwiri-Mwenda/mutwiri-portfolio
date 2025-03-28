
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center py-16">
        <h1 className="text-6xl font-semibold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Oops! Page not found</p>
        <Link to="/" className="text-portfolio-brown hover:underline">
          Return to Home
        </Link>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
