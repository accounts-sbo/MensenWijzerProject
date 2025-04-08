
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';

const CommunicationMedia = () => {
  return (
    <div className="min-h-screen bg-mensen-white">
      <Header />
      <div className="pt-24 md:pt-28">
        <ServiceDetail 
          title="Communicatie- & Mediastrategie"
          subtitle="Diensten"
          description="Van strategie tot zichtbaarheid. Ik help je om je verhaal om te zetten naar een effectieve communicatie- en mediastrategie."
          imageSrc="/lovable-uploads/c74ae2d5-0e01-49cd-bd0a-92fa1ed57048.png"
        />
      </div>
      <Footer />
    </div>
  );
};

export default CommunicationMedia;
