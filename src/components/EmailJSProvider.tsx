
import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

interface EmailJSProviderProps {
  children: React.ReactNode;
}

const EmailJSProvider: React.FC<EmailJSProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize EmailJS with your user ID
    // You'll need to sign up at https://www.emailjs.com/ and replace with your own user ID
    emailjs.init("your_user_id");
  }, []);

  return <>{children}</>;
};

export default EmailJSProvider;
