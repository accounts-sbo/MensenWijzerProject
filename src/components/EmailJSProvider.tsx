
import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

interface EmailJSProviderProps {
  children: React.ReactNode;
}

// Deze publieke sleutel is al ingesteld in je code
const EMAILJS_PUBLIC_KEY = "eoENQhbSQ1hC5QeCc";

const EmailJSProvider: React.FC<EmailJSProviderProps> = ({ children }) => {
  useEffect(() => {
    // Simple one-time initialization
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log("EmailJS geïnitialiseerd met publieke sleutel:", EMAILJS_PUBLIC_KEY);
  }, []);

  return <>{children}</>;
};

export default EmailJSProvider;
