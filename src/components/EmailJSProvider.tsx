
import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

interface EmailJSProviderProps {
  children: React.ReactNode;
}

// Deze publieke sleutel is al ingesteld in je code
const EMAILJS_PUBLIC_KEY = "eoENQhbSQ1hC5QeCc";

const EmailJSProvider: React.FC<EmailJSProviderProps> = ({ children }) => {
  useEffect(() => {
    try {
      // Initialize EmailJS with your user ID
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log("EmailJS initialized in provider with key:", EMAILJS_PUBLIC_KEY);
      
      // Force initialization to ensure it's properly set up
      (window as any).emailJSInitialized = true;
    } catch (error) {
      console.error("Error initializing EmailJS:", error);
      (window as any).emailJSInitialized = false;
    }
  }, []);

  return <>{children}</>;
};

export default EmailJSProvider;
