
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-mensen-white">
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-brass-mono mb-6 text-mensen-blue">404</h1>
          <p className="text-xl text-mensen-black mb-8 font-lucida tracking-wide-50">
            Deze pagina kon niet worden gevonden.
          </p>
          <Link to="/" className="cta-button">
            Terug naar home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
