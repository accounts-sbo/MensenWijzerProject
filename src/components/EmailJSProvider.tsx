
import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

interface EmailJSProviderProps {
  children: React.ReactNode;
}

const EmailJSProvider: React.FC<EmailJSProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize EmailJS with your user ID
    emailjs.init("UGh5dNKG95dWkqDDO");
  }, []);

  return <>{children}</>;
};

export default EmailJSProvider;
