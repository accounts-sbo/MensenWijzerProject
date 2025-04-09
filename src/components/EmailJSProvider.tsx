
import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

interface EmailJSProviderProps {
  children: React.ReactNode;
}

// Deze publieke sleutel is al ingesteld in je code
const EMAILJS_PUBLIC_KEY = "UGh5dNKG95dWkqDDO";

const EmailJSProvider: React.FC<EmailJSProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize EmailJS with your user ID
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log("EmailJS initialized in provider with key:", EMAILJS_PUBLIC_KEY);
  }, []);

  return <>{children}</>;
};

export default EmailJSProvider;
