
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';

const PresentationProfiling = () => {
  return (
    <div className="min-h-screen bg-mensen-white">
      <Header />
      <div className="pt-24 md:pt-28">
        <ServiceDetail 
          title="Presentatie & Profilering"
          subtitle="Diensten"
          description="Laat zien wie je bent – met rust, overtuiging en authenticiteit. Ik help je om jezelf beter te presenteren en te profileren."
          imageSrc="/lovable-uploads/7f204317-c015-449b-a03a-ee02ebaed039.png"
        />
      </div>
      <Footer />
    </div>
  );
};

export default PresentationProfiling;
